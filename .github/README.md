# Corvex - Community Management System

We are not ready for a production release yet but stick around, shouldn't be too long 🤞

I will do a detailed README when we are in nearing production state.

Check out our [features](https://github.com/hawkservers/corvex/blob/master/.github/FEATURES.md)

### Requirements
 - PHP \>= 7.4 (I wanted to use types...)
   - [Laravel](https://laravel.com/docs/8.x/installation#server-requirements)
   - [Composer](https://getcomposer.org)
 - [Node.js](https://nodejs.org/) - Used to build react and tailwindcss
   - [Yarn package manager](https://yarnpkg.com/) (`npm i -g yarn`)
 - [A database that is supported by Laravel](https://laravel.com/docs/8.x/database#introduction)


### Setting up
#### Before you get it running
 - Install dependencies `composer install`
 - Setup Config
   - `composer run-script setup-env`
   - Full config guide later on...
 - Install dependencies `yarn`
 
#### Start it up
 - Start a http server - `php artisan serve` 
 - Build react and tailwind
   - Watch for file changes `yarn watch` (good for dev)
   - Build a development copy `yarn dev`  
