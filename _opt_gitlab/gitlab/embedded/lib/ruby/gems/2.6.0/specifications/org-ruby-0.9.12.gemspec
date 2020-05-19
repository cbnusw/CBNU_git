# -*- encoding: utf-8 -*-
# stub: org-ruby 0.9.12 ruby lib

Gem::Specification.new do |s|
  s.name = "org-ruby".freeze
  s.version = "0.9.12"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Brian Dewey".freeze, "Waldemar Quevedo".freeze]
  s.date = "2014-12-22"
  s.description = "An Org mode parser written in Ruby.".freeze
  s.email = "waldemar.quevedo@gmail.com".freeze
  s.executables = ["org-ruby".freeze]
  s.extra_rdoc_files = ["History.org".freeze, "README.org".freeze, "bin/org-ruby".freeze]
  s.files = ["History.org".freeze, "README.org".freeze, "bin/org-ruby".freeze]
  s.homepage = "https://github.com/wallyqs/org-ruby".freeze
  s.licenses = ["MIT".freeze]
  s.rubyforge_project = "org-ruby".freeze
  s.rubygems_version = "2.7.10".freeze
  s.summary = "This gem contains Ruby routines for parsing org-mode files.".freeze

  s.installed_by_version = "2.7.10" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<rubypants>.freeze, ["~> 0.2"])
    else
      s.add_dependency(%q<rubypants>.freeze, ["~> 0.2"])
    end
  else
    s.add_dependency(%q<rubypants>.freeze, ["~> 0.2"])
  end
end
