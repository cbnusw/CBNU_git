# -*- encoding: utf-8 -*-
# stub: toml-rb 1.0.0 ruby lib

Gem::Specification.new do |s|
  s.name = "toml-rb".freeze
  s.version = "1.0.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Emiliano Mancuso".freeze, "Lucas Tolchinsky".freeze]
  s.date = "2017-06-14"
  s.description = "A Toml parser using Citrus parsing library. ".freeze
  s.email = ["emiliano.mancuso@gmail.com".freeze, "lucas.tolchinsky@gmail.com".freeze]
  s.homepage = "http://github.com/emancu/toml-rb".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "2.7.10".freeze
  s.summary = "Toml parser in ruby, for ruby.".freeze

  s.installed_by_version = "2.7.10" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<citrus>.freeze, ["~> 3.0", "> 3.0"])
    else
      s.add_dependency(%q<citrus>.freeze, ["~> 3.0", "> 3.0"])
    end
  else
    s.add_dependency(%q<citrus>.freeze, ["~> 3.0", "> 3.0"])
  end
end
