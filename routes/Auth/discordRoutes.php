<?php

use App\Http\Controllers\Auth\DiscordController;
use Illuminate\Support\Facades\Route;

if (config('services.discord.enabled')) {
    Route::get(config('services.discord.path'), [DiscordController::class, 'index'])
        ->name('');

    Route::get(config('services.discord.path') . '/callback', [DiscordController::class, 'store'])
        ->name('.callback');
}
