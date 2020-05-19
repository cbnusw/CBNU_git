# -*- encoding: utf-8 -*-
# stub: akismet 3.0.0 ruby lib

Gem::Specification.new do |s|
  s.name = "akismet".freeze
  s.version = "3.0.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Jonah Burke".freeze]
  s.date = "2019-08-03"
  s.email = ["jonah@jonahb.com".freeze]
  s.homepage = "http://github.com/jonahb/akismet".freeze
  s.licenses = ["MIT".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.4".freeze)
  s.rubygems_version = "2.7.10".freeze
  s.summary = "A Ruby client for the Akismet API".freeze

  s.installed_by_version = "2.7.10" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<bundler>.freeze, [">= 1.7"])
      s.add_development_dependency(%q<minitest>.freeze, ["~> 5.11"])
      s.add_development_dependency(%q<rake>.freeze, ["~> 12.0"])
      s.add_development_dependency(%q<yard>.freeze, ["~> 0.9.20"])
    else
      s.add_dependency(%q<bundler>.freeze, [">= 1.7"])
      s.add_dependency(%q<minitest>.freeze, ["~> 5.11"])
      s.add_dependency(%q<rake>.freeze, ["~> 12.0"])
      s.add_dependency(%q<yard>.freeze, ["~> 0.9.20"])
    end
  else
    s.add_dependency(%q<bundler>.freeze, [">= 1.7"])
    s.add_dependency(%q<minitest>.freeze, ["~> 5.11"])
    s.add_dependency(%q<rake>.freeze, ["~> 12.0"])
    s.add_dependency(%q<yard>.freeze, ["~> 0.9.20"])
  end
end
