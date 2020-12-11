<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Resources\Auth\AuthUrlResource;
use Laravel\Socialite\Facades\Socialite;

class SteamController extends Controller
{
    use AuthHandler;

    public function index(): AuthUrlResource
    {
        return new AuthUrlResource(Socialite::driver('steam')->redirect()->getTargetUrl());
    }

    public function store()
    {
        $loginUser = Socialite::driver('steam')->stateless()->user();

        $token = $this->handleLogin('steam', collect([
            'platform_id' => $loginUser->id,
            'username' => $loginUser->nickname,
            'avatar' => $loginUser->avatar,
        ]));

        return redirect('/login/callback/' . $token->plainTextToken);
    }
}
