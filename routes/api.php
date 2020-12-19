<?php

use App\Http\Controllers\Users\Me\MeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('/v1')->group(function() {
    Route::prefix('/auth')->name('auth.')->group(base_path('routes/auth/index.php'));

    Route::middleware('auth:sanctum')->group(function() {
        Route::prefix('/users')->group(function() {
            Route::resource('me', MeController::class)->only(['index']);
        });
    });

    Route::group([], base_path('routes/forums/index.php'));
});
