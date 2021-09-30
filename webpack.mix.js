const mix = require('laravel-mix')

mix
  .setPublicPath('public')
  .js('src/js/app.js', 'js')
  .sass('src/scss/app.scss', 'css')
  .sass('src/scss/style.scss', 'css')
  // .copyDirectory('resources/images', 'public/images')
  .sourceMaps()
