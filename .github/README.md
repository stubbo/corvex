# Hawk Servers Forums

We are not ready for a production release yet but stick around, should be too long 🤞

I will do a detailed README when we are in nearing production state.


### Requirements
 - PHP \>= 7.4 (I wanted to use types...)
   - Extensions [Laravel Requirements](https://laravel.com/docs/8.x/installation#server-requirements)
   - [Composer](https://getcomposer.org)
 - Node.js - Used to build react and tailwindcss
   - yarn package manager (`npm i -g yarn`)
 - [A database that is supported by laravel](https://laravel.com/docs/8.x/database#introduction)



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
