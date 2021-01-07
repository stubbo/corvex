<?php

namespace App\Models\Forum;

use App\Traits\HasUuid;
use App\Traits\SoftDeletes;
use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;

/**
 * Class Index
 * @package App\Models\Forums
 *
 * @property string $id
 * @property string $title
 * @property string $slug
 * @property string $description
 * @property string $icon
 *
 * @method static Forum create(array $data)
 *
 * @mixin Eloquent
 * @mixin Model
 * @mixin Builder
 */
class Forum extends Model
{
    use HasFactory, HasUuid, SoftDeletes;

    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'title', 'slug', 'description', 'icon'
    ];

    protected $casts = [
        'category' => 'boolean',
    ];

    protected array $cascadeDeletes = [
        'boards'
    ];

    /**
     * @return MorphMany
     */
    public function boards(): MorphMany
    {
        return $this->morphMany(Board::class, 'parent');
    }

    /**
     * Retrieve the model for a bound value.
     *
     * @param mixed       $value
     * @param string|null $field
     * @return Model
     */
    public function resolveRouteBinding($value, $field = null): Model
    {
        return $this->where('id', $value)->orWHere('slug', $value)->firstOrFail();
    }
}
