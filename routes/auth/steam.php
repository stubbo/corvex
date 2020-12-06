<?php

use App\Http\Controllers\Auth\SteamController;
use Illuminate\Support\Facades\Route;

if (config('services.steam.enabled')) {
    Route::get('/steam', [SteamController::class, 'index']);

    Route::get('/steam/callback', [SteamController::class, 'store'])->name('.callback');
}
