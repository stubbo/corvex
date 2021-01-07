<?php

namespace App\Models\Accounts;

use App\Traits\HasSystemPermission;
use App\Traits\HasUuid;
use App\Traits\SoftDeletes;
use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Laravel\Sanctum\HasApiTokens;
use Storage;

/**
 * Class User
 * @package App\Models
 *
 * @property string $id
 * @property string $username
 * @property string $avatar_path
 * @property string $avatarFile
 * @property string $avatarUrl
 * @property PlatformAccount|Collection $platformAccounts
 * @property Role|Collection $roles
 * @property Permission|Collection $permissions
 * @property Ban|Collection $bans
 *
 * @method static User|Builder create(array $data)
 *
 * @mixin Eloquent
 * @mixin Model
 * @mixin Builder
 */
class User extends Model
{
    use HasUuid, HasApiTokens, HasFactory, SoftDeletes, HasSystemPermission;

    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'username', 'avatar_path',
    ];

    protected array $cascadeDeletes = [
        'platformAccounts'
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

    public function roles(): belongsToMany
    {
        return $this->belongsToMany(Role::class);
    }

    public function bans(): HasMany
    {
        return $this->hasMany(Ban::class);
    }

    public function permissions(): MorphMany
    {
        return $this->morphMany(Permission::class, 'authority');
    }
}
