require 'jwt'
require_relative '../helpers/helpers'

module OmniAuth
  module Strategies
    class Authentiq
      class BackChannelLogoutRequest

        def initialize(strategy, request)
          @strategy, @request = strategy, request
        end

        def call(options = {})
          @options = options

          begin
            result = sign_out_callback.call(*back_channel_logout_request)
          rescue StandardError, ArgumentError, NotImplementedError => err
            if err.class.equal?(ArgumentError)
              result = back_channel_logout_response(400, [err.to_s])
            elsif err.class.equal?(NotImplementedError)
              result = back_channel_logout_response(501, [err.to_s])
            else
              result = back_channel_logout_response(400, [err.to_s])
            end
          else
            if result
              result = back_channel_logout_response(200, ['Logout succeeded'])
            else
              result = back_channel_logout_response(404, ['Unknown session'])
            end
          ensure
            return unless result
            return result.finish
          end
        end

        private

        def back_channel_logout_request
          @logout_request || begin
            decode_logout_token(@request.params['logout_token'])
            @request
          end
        end

        def decode_logout_token(logout_token)
          begin
            logout_jwt = JWT.decode(
                logout_token,
                @options.client_secret,
                true,
                :algorithm => helpers.algorithm(@options),
                :iss => @options.client_options.site,
                :verify_iss => true,
                :aud => @options.client_id,
                :verify_aud => true,
                :verify_iat => true,
                :verify_jti => true,
                :verify_sub => true,
                :leeway => 60
            )
            if validate_events(logout_jwt.first) && validate_nonce(logout_jwt.first) && validate_sid(logout_jwt.first)
              @request.update_param('sid', logout_jwt[0]['sid'])
            else
              raise(ArgumentError, 'Logout JWT validation failed. Missing session, events claim or nonce claim is present')
            end
          end
        end

        def validate_events(logout_jwt)
          logout_jwt.key?('events') && logout_jwt['events'].key?('http://schemas.openid.net/event/backchannel-logout')
        end

        def validate_nonce(logout_jwt)
          !logout_jwt.key?('nonce')
        end

        def sign_out_callback
          if @options.has_key?(:remote_sign_out_handler) && (@options[:remote_sign_out_handler].respond_to? :call)
            @options[:remote_sign_out_handler]
          else
            OmniAuth::logger.send(:warn, 'It looks like remote logout is configured on your Authentiq client but \':remote_sign_out_handler\' is not implemented on devise or omniauth')
            raise(NotImplementedError, 'Remote sign out failed because the client\'s \':remote_sign_out_handler\' is not implemented on devise or omniauth')
          end
        end

        def validate_sid(logout_jwt)
          logout_jwt.key?('sid')
        end

        def back_channel_logout_response(code, body)
          response = Rack::Response.new
          response.status = code
          response['Cache-Control'] = 'no-cache, no-store'
          response['Pragma'] = 'no-cache'
          response.headers['Content-Type'] = 'text/plain; charset=utf-8'
          response.body = body
          response
        end

        def helpers
          Helpers
        end
      end
    end
  end
end
