<?php

namespace App\Models\Account;

use App\Traits\HasUuid;

class PersonalAccessToken extends \Laravel\Sanctum\PersonalAccessToken
{
    use HasUuid;
}
