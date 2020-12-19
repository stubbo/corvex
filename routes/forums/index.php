<?php

use App\Http\Controllers\Forums\ForumBoardsController;
use App\Http\Controllers\Forums\ForumController;

Route::resource('forums', ForumController::class)->except(['create', 'edit']);
Route::resource('forums.boards', ForumBoardsController::class)->except(['create', 'edit']);
