<?php

namespace App\Models\Accounts;

use App\Traits\HasUuid;

class PersonalAccessToken extends \Laravel\Sanctum\PersonalAccessToken
{
    use HasUuid;

    public $incrementing = false;
    protected $keyType = 'string';
}
