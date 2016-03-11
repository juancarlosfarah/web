require 'html-proofer'
require 'coveralls'

Coveralls.wear!

task :test do
  sh "bundle exec jekyll build"
  HTMLProofer.check_directory("./_site", {
    :check_favicon => true,
    :check_html => true,
    :only_4xx => true
  }).run
end
