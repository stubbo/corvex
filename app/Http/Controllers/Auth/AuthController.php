<?php

namespace App\Http\Controllers\Auth;

use App\Models\PlatformAccount;
use App\Models\User;
use Exception;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Laravel\Sanctum\NewAccessToken;
use Storage;
use Str;

trait AuthController
{
    public function handleLogin($platform, Collection $data): NewAccessToken
    {
        $account = PlatformAccount::where([
            'platform' => $platform, 'platform_id' => $data->get('platform_id')
        ])->first();

        if ($account) {
            $user = $account->user;
            return $user->createToken('forum');
        }

        $avatarPath = config('auth.default_avatar');

        try {
            $avatarNewPath = 'users/avatars/' . Str::uuid()->toString();
            Storage::put($avatarPath, Http::get($data->get('avatar'))->body());
            $avatarPath = $avatarNewPath;
        } catch (Exception $e) {
            Log::error($e->getMessage(), $e->getTrace());
        }

        $user = User::create([
            'username' => $data->get('username'),
            'avatar_path' => $avatarPath,
        ]);

        $user->platformAccounts()->create([
            'platform' => $platform,
            'platform_id' => $data->get('platform_id'),
            'access_token' => $data->get('access_token'),
            'refresh_token' => $data->get('refresh_token'),
            'expires_at' => $data->get('expires_at'),
        ]);

        return $user->createToken('forum');
    }
}
