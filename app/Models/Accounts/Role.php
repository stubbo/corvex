<?php

namespace App\Models\Accounts;

use App\Casts\ColorCaster;
use App\Traits\HasUuid;
use App\Traits\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class Role extends Model
{
    use HasFactory, HasUuid, SoftDeletes;

    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'name', 'display', 'color',
    ];

    protected $casts = [
        'color' => ColorCaster::class
    ];

    public function users(): belongsToMany
    {
        return $this->belongsToMany(User::class);
    }

    public function permissions(): MorphMany
    {
        return $this->morphMany(Permission::class, 'authority');
    }
}
