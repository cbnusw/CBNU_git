# frozen_string_literal: true

module Labkit
  module Tracing
    module Rails
      module ActiveSupport
        # For more information on the payloads: https://guides.rubyonrails.org/active_support_instrumentation.html
        class CacheGenerateInstrumenter < AbstractInstrumenter
          def span_name(payload)
            "cache_generate"
          end

          def tags(payload)
            { "component" => COMPONENT_TAG, "cache.key" => payload[:key] }
          end
        end
      end
    end
  end
end
