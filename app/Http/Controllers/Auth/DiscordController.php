<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Resources\Auth\AuthUrlResource;
use Arr;
use Http;
use Laravel\Socialite\Facades\Socialite;

class DiscordController extends Controller
{
    use AuthController;

    public function index(): AuthUrlResource
    {
        $scopes = [
            'identify'
        ];

        if (config('services.discord.join_guild', false)) {
            $scopes[] = 'guilds';
            $scopes[] = 'guilds.join';
        }

        return new AuthUrlResource(
            Socialite::driver('discord')->setScopes($scopes)->stateless()->redirect()->getTargetUrl()
        );
    }

    public function store()
    {
        $loginUser = Socialite::driver('discord')->stateless()->user();

        $data = collect([
            'platform_id' => $loginUser->id,
            'username' => $loginUser->nickname,
            'avatar' => $loginUser->avatar,
            'access_token' => $loginUser->token,
            'refresh_token' => $loginUser->refreshToken,
            'expires_at' => $loginUser->expiresIn ? now()->addSeconds($loginUser->expiresIn) : null,
            'last_user' => now(),
        ]);

        $guildId = config('services.discord.guild_id');
        $botToken = config('services.discord.bot_token');
        if (!config('services.discord.join_guild', false) || !($guildId && $botToken)) {
            $token = $this->handleLogin('discord', $data);

            return redirect('/login/callback/' . $token->plainTextToken);
        }


        $token = $this->handleLogin('discord', $data->put('last_used', now()));

        $guilds = Http::withToken($loginUser->token)->get('https://discordapp.com/api/v6/users/@me/guilds')->json();

        $guildCheck = Arr::where($guilds, function ($value) use ($guildId) {
            return $value['id'] === $guildId;
        });

        if (sizeof($guildCheck) === 1) {
            return redirect('/login/callback/' . $token->plainTextToken);
        }

        Http::withToken($botToken, 'Bot')
            ->put("https://discordapp.com/api/v6/guilds/{$guildId}/members/{$loginUser->id}", [
                'access_token' => $loginUser->token,
            ]);

        return redirect('/login/callback/' . $token->plainTextToken);
    }
}
