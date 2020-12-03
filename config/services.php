<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
        'endpoint' => env('MAILGUN_ENDPOINT', 'api.mailgun.net'),
    ],

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],

    'steam' => [
        'enabled' => (bool)env('MIX_STEAM_AUTH_ENABLED', false),
        'path' => env('STEAM_PATH', '/steam'),

        'client_id' => null,
        'client_secret' => env('STEAM_API'),
        'redirect' => env('APP_URL') . '/api/v1/auth' . env('STEAM_PATH', '/steam') . '/callback',

        'group_id' => env('STEAM_GROUP'),
    ],

    'discord' => [
        'enabled' => (bool)env('MIX_DISCORD_AUTH_ENABLED', false),
        'path' => env('DISCORD_PATH', '/discord'),

        'client_id' => env('DISCORD_CLIENT_ID'),
        'client_secret' => env('DISCORD_CLIENT_SECRET'),
        'redirect' => env('APP_URL') . '/api/v1/auth' . env('DISCORD_PATH', '/discord') . '/callback',

        'notification_webhook' => env('DISCORD_WEBHOOK'),

        /* Check users discord roles, Join guild when you login */
        'join_guild' => (bool)env('DISCORD_JOIN_GUILD'),
        'guild_id' => env('DISCORD_GUILD'),
        'bot_token' => env('DISCORD_BOT_TOKEN'),
    ],
];
