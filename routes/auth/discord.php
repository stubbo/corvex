<?php

use App\Http\Controllers\Auth\DiscordController;
use Illuminate\Support\Facades\Route;

if (config('services.discord.enabled')) {
    Route::get('/discord', [DiscordController::class, 'index']);

    Route::get('/discord/callback', [DiscordController::class, 'store'])->name('.callback');
}
