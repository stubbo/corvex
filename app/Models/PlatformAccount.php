<?php

namespace App\Models;

use App\Traits\HasUuid;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Class Account
 * @package App\Models
 *
 * @property string      $platform
 * @property int         $platform_id
 * @property string|null $access_token
 * @property string|null $refresh_token
 * @property Carbon|null $expires_at
 * @property Carbon|null $last_used
 * @property User        $user
 *
 * @method static PlatformAccount|Builder where($dataOrColumn, $operatorOrValue = null, $value = null)
 */
class PlatformAccount extends Model
{
    use HasUuid;

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
