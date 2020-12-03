<?php

use App\Http\Controllers\Auth\SteamController;
use Illuminate\Support\Facades\Route;

if (config('services.steam.enabled')) {
    Route::get(config('services.steam.path'), [SteamController::class, 'index'])
        ->name('');

    Route::get(config('services.steam.path') . '/callback', [SteamController::class, 'store'])
        ->name('.callback');
}
