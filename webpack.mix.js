const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const webpackConfig = require('./webpack.config');
const dotenv = require('dotenv');
const path = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig(() => {
  // Used to add defaults to env, means i can actually check things
  dotenv.config({path: path.resolve(process.cwd(), '.env.defaults')});

  return webpackConfig;
});

mix.js('resources/js/app.tsx', 'public/js').react()
  .postCss('resources/css/app.css', 'public/css', [
    tailwindcss('./tailwind.config.js'),
    autoprefixer,
  ]);

if (!mix.inProduction()) {
  mix.sourceMaps();
} else {
  mix.version()
}
