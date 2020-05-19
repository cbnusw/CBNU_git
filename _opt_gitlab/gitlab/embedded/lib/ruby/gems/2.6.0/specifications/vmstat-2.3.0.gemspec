# -*- encoding: utf-8 -*-
# stub: vmstat 2.3.0 ruby lib
# stub: ext/vmstat/extconf.rb

Gem::Specification.new do |s|
  s.name = "vmstat".freeze
  s.version = "2.3.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Vincent Landgraf".freeze]
  s.date = "2016-12-26"
  s.description = "\n    A focused and fast library to gather memory, \n    cpu, network, load avg and disk information\n  ".freeze
  s.email = ["vilandgr@googlemail.com".freeze]
  s.extensions = ["ext/vmstat/extconf.rb".freeze]
  s.files = ["ext/vmstat/extconf.rb".freeze]
  s.homepage = "http://threez.github.com/ruby-vmstat/".freeze
  s.rubygems_version = "2.7.10".freeze
  s.summary = "A focused and fast library to gather system information".freeze

  s.installed_by_version = "2.7.10" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<rake>.freeze, ["~> 11.3"])
      s.add_development_dependency(%q<rspec>.freeze, ["~> 2.9"])
      s.add_development_dependency(%q<rake-compiler>.freeze, [">= 0"])
      s.add_development_dependency(%q<guard-rspec>.freeze, [">= 0"])
      s.add_development_dependency(%q<timecop>.freeze, [">= 0"])
    else
      s.add_dependency(%q<rake>.freeze, ["~> 11.3"])
      s.add_dependency(%q<rspec>.freeze, ["~> 2.9"])
      s.add_dependency(%q<rake-compiler>.freeze, [">= 0"])
      s.add_dependency(%q<guard-rspec>.freeze, [">= 0"])
      s.add_dependency(%q<timecop>.freeze, [">= 0"])
    end
  else
    s.add_dependency(%q<rake>.freeze, ["~> 11.3"])
    s.add_dependency(%q<rspec>.freeze, ["~> 2.9"])
    s.add_dependency(%q<rake-compiler>.freeze, [">= 0"])
    s.add_dependency(%q<guard-rspec>.freeze, [">= 0"])
    s.add_dependency(%q<timecop>.freeze, [">= 0"])
  end
end
