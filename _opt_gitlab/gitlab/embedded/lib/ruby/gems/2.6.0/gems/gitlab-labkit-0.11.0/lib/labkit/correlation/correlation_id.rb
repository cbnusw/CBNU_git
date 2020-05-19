# frozen_string_literal: true

module Labkit
  module Correlation
    # CorrelationId module provides access the Correlation-ID
    # of the current request
    module CorrelationId
      LOG_KEY = Labkit::Context::CORRELATION_ID_KEY

      class << self
        def use_id(correlation_id)
          Labkit::Context.with_context(LOG_KEY => correlation_id) do |context|
            yield(context.correlation_id)
          end
        end

        def current_id
          Labkit::Context.correlation_id
        end

        def current_or_new_id
          current_id || Labkit::Context.push.correlation_id
        end
      end
    end
  end
end
