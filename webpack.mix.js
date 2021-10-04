const mix = require('laravel-mix')

mix
  .setResourceRoot('..')
  .setPublicPath('public')
  .js('src/js/app.js', 'js')
  .sass('src/scss/app.scss', 'css')
  .sass('src/scss/style.scss', 'css')
  .copyDirectory('src/images', 'public/images')
  .sourceMaps()
