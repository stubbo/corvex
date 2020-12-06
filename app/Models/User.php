<?php

namespace App\Models;

use App\Traits\HasUuid;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Laravel\Sanctum\HasApiTokens;
use Storage;

/**
 * Class User
 * @package App\Models
 *
 * @property string $username
 * @property string $avatar_path
 * @property string $avatarFile
 * @property string $avatarUrl
 * @property User|Collection $platformAccounts
 *
 * @method static User|Builder create(array $data)
 */
class User extends Model
{
    use HasUuid, HasApiTokens, HasFactory;

    protected $fillable = [
        'username', 'avatar_path',
    ];

    public function getAvatarFileAttribute(): string
    {
        return Storage::get($this->avatar_path);
    }

    public function getAvatarUrlAttribute(): string
    {
        return Storage::url($this->avatar_path);
    }

    public function platformAccounts(): HasMany
    {
        return $this->hasMany(PlatformAccount::class);
    }
}
