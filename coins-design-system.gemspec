# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "coins-design-system"
  spec.version       = "0.1.0"
  spec.authors       = ["Naz Zebra"]
  spec.email         = ["naz.zebra@gmail.com"]

  spec.summary       = "A short summary, because Rubygems requires one."
  spec.homepage      = "https://example.com"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.2"
end
