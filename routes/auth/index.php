<?php

use App\Http\Controllers\Auth\AuthController;

Route::name('steam')->group(base_path('routes/auth/steam.php'));
Route::name('discord')->group(base_path('routes/auth/discord.php'));

Route::post('logout', [AuthController::class, 'logout'])->middleware('auth:sanctum')->name('logout');
