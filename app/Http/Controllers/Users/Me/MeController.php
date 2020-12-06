<?php

namespace App\Http\Controllers\Users\Me;

use App\Http\Controllers\Controller;
use App\Http\Resources\Users\UserResource;
use Auth;

class MeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return UserResource
     */
    public function index(): UserResource
    {
        return new UserResource(Auth::user());
    }
}
