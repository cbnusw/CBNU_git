# -*- encoding: utf-8 -*-
# stub: omniauth-cas3 1.1.4 ruby lib

Gem::Specification.new do |s|
  s.name = "omniauth-cas3".freeze
  s.version = "1.1.4"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Derek Lindahl, tduehr".freeze]
  s.date = "2017-05-15"
  s.description = "CAS 3.0 Strategy for OmniAuth".freeze
  s.email = ["td@matasano.com".freeze]
  s.homepage = "https://github.com/tduehr/omniauth-cas3".freeze
  s.rubygems_version = "2.7.10".freeze
  s.summary = "CAS 3.0 Strategy for OmniAuth".freeze

  s.installed_by_version = "2.7.10" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<omniauth>.freeze, ["~> 1.2"])
      s.add_runtime_dependency(%q<nokogiri>.freeze, ["~> 1.7", ">= 1.7.1"])
      s.add_runtime_dependency(%q<addressable>.freeze, ["~> 2.3"])
      s.add_development_dependency(%q<rake>.freeze, ["~> 10.0"])
      s.add_development_dependency(%q<webmock>.freeze, ["~> 1.19.0"])
      s.add_development_dependency(%q<rspec>.freeze, ["~> 3.1.0"])
      s.add_development_dependency(%q<rack-test>.freeze, ["~> 0.6"])
      s.add_development_dependency(%q<awesome_print>.freeze, [">= 0"])
    else
      s.add_dependency(%q<omniauth>.freeze, ["~> 1.2"])
      s.add_dependency(%q<nokogiri>.freeze, ["~> 1.7", ">= 1.7.1"])
      s.add_dependency(%q<addressable>.freeze, ["~> 2.3"])
      s.add_dependency(%q<rake>.freeze, ["~> 10.0"])
      s.add_dependency(%q<webmock>.freeze, ["~> 1.19.0"])
      s.add_dependency(%q<rspec>.freeze, ["~> 3.1.0"])
      s.add_dependency(%q<rack-test>.freeze, ["~> 0.6"])
      s.add_dependency(%q<awesome_print>.freeze, [">= 0"])
    end
  else
    s.add_dependency(%q<omniauth>.freeze, ["~> 1.2"])
    s.add_dependency(%q<nokogiri>.freeze, ["~> 1.7", ">= 1.7.1"])
    s.add_dependency(%q<addressable>.freeze, ["~> 2.3"])
    s.add_dependency(%q<rake>.freeze, ["~> 10.0"])
    s.add_dependency(%q<webmock>.freeze, ["~> 1.19.0"])
    s.add_dependency(%q<rspec>.freeze, ["~> 3.1.0"])
    s.add_dependency(%q<rack-test>.freeze, ["~> 0.6"])
    s.add_dependency(%q<awesome_print>.freeze, [">= 0"])
  end
end
