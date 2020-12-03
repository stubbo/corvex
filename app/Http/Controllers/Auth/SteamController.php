<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Resources\Auth\AuthUrlResource;
use Laravel\Socialite\Facades\Socialite;

class SteamController extends Controller
{
    use AuthController;

    public function index()
    {
        return new AuthUrlResource(Socialite::driver('steam')->redirect()->getTargetUrl());
    }

    public function store()
    {
        $loginUser = Socialite::driver('steam')->stateless()->user();

        return $this->handleLogin('steam', collect([
            'platform_id' => $loginUser->id,
            'username' => $loginUser->nickname,
            'avatar' => $loginUser->avatar,
            'access_token' => $loginUser->token,
            'refresh_token' => $loginUser->refreshToken,
            'expires_at' => $loginUser->expiresIn ? now()->addSeconds($loginUser->expiresIn) : null,
        ]));
    }
}
