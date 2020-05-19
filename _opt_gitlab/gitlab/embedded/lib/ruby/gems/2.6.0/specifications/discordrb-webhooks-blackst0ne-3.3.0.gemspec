# -*- encoding: utf-8 -*-
# stub: discordrb-webhooks-blackst0ne 3.3.0 ruby lib

Gem::Specification.new do |s|
  s.name = "discordrb-webhooks-blackst0ne".freeze
  s.version = "3.3.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["blackst0ne".freeze]
  s.bindir = "exe".freeze
  s.date = "2018-11-05"
  s.description = "A client for Discord's webhooks to fit alongside [discordrb](https://rubygems.org/gems/discordrb).".freeze
  s.email = ["".freeze]
  s.homepage = "https://github.com/blackst0ne/discordrb".freeze
  s.licenses = ["MIT".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.3.7".freeze)
  s.rubygems_version = "2.7.10".freeze
  s.summary = "Webhook client for discordrb. Fork by blackst0ne".freeze

  s.installed_by_version = "2.7.10" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<rest-client>.freeze, ["~> 2.0"])
    else
      s.add_dependency(%q<rest-client>.freeze, ["~> 2.0"])
    end
  else
    s.add_dependency(%q<rest-client>.freeze, ["~> 2.0"])
  end
end
