<?php

namespace App\Models\Forum;

use App\Traits\HasUuid;
use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphTo;

/**
 * Class Forums
 * @package App\Models\Forums
 *
 * @property string $id
 * @property string $title
 * @property string $slug
 * @property string $description
 * @property string $icon
 *
 * @method static Board create(array $data)
 *
 * @mixin Eloquent
 * @mixin Model
 * @mixin Builder
 */
class Board extends Model
{
    use HasFactory, HasUuid;

    protected $fillable = [
        'title', 'description', 'icon',
    ];

    public function children(): MorphMany
    {
        return $this->morphMany(Board::class, 'parent');
    }

    public function parent(): MorphTo
    {
        return $this->morphTo();
    }
}
