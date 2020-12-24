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
 * Class Index
 * @package App\Models\Forums
 *
 * @property string      $id
 * @property string      $title
 * @property string      $slug
 * @property string      $description
 * @property string      $icon
 * @property Forum|Board $parent
 * @property string      $parent_id
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

    public function generateBreadcrumb()
    {
        $crumbs = [];

        $current = $this;
        while ($parent = $current->parent) {
            $current = $parent;

            $crumbs[] = [
                'id' => $parent->id,
                'slug' => $parent->slug,
                'title' => $parent->title,
                'type' => $parent instanceof Forum ? 'forum' : 'board'
            ];
        }

        return $crumbs;
    }
}
