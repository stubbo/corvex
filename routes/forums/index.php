<?php

use App\Http\Controllers\Forums\BoardsController;
use App\Http\Controllers\Forums\ForumController;

Route::resource('forums', ForumController::class)->except(['create', 'edit']);
Route::resource('boards', BoardsController::class)->except(['create', 'edit']);
