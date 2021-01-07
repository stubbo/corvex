<?php

namespace App\Models\Accounts;

use App\Models\Nova\NovaUser;
use App\Traits\HasUuid;
use App\Traits\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ban extends Model
{
    use HasFactory, HasUuid, SoftDeletes;

    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'reason', 'unban_at',
    ];

    protected $casts = [
        'unban_at' => 'datetime',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function admin()
    {
        return $this->belongsTo(NovaUser::class);
    }
}
