<?php

namespace App\Models\Accounts;

use App\Traits\HasUuid;
use App\Traits\SoftDeletes;
use Carbon\Carbon;
use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Class Account
 * @package App\Models
 *
 * @property string      $id
 * @property string      $platform
 * @property int         $platform_id
 * @property string|null $access_token
 * @property string|null $refresh_token
 * @property Carbon|null $expires_at
 * @property Carbon|null $last_used
 * @property User        $user
 *
 * @method static PlatformAccount|Builder where($dataOrColumn, $operatorOrValue = null, $value = null)
 *
 * @mixin Eloquent
 * @mixin Model
 * @mixin Builder
 */
class PlatformAccount extends Model
{
    use HasUuid, SoftDeletes;

    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'platform', 'platform_id', 'access_token', 'refresh_token', 'expires_at', 'last_used',
    ];

    protected $hidden = [
        'access_token', 'refresh_token'
    ];

    protected $casts = [
        'access_token' => 'encrypted',
        'refresh_token' => 'encrypted',
        'expires_at' => 'timestamp',
        'last_used' => 'timestamp',
    ];

    public function getTokenExpiredAttribute(): bool
    {
        return $this->expires_at <= Carbon::now();
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
