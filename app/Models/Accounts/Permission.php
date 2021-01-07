<?php

namespace App\Models\Accounts;

use App\Traits\HasUuid;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Database\Query\Builder;

/**
 * Class Permission
 * @package App\Models\Accounts
 *
 * @method static Permission|Builder where($dataOrColumn, $valueOrOperator = null, $value = null)
 */
class Permission extends Model
{
    use HasFactory, HasUuid;

    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'system', 'can_index', 'can_store', 'can_show', 'can_update', 'can_destroy'
    ];

    /**
     * @return User|Role|MorphTo
     */
    public function authority(): MorphTo
    {
        return $this->morphTo();
    }

    /**
     * Get the resource this permission is attached to
     *
     * @return MorphTo|User|Role
     */
    public function resource(): MorphTo
    {
        return $this->morphTo();
    }
}
