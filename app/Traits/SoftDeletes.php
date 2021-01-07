<?php


namespace App\Traits;


use Dyrynda\Database\Support\CascadeSoftDeletes;
use Illuminate\Database\Eloquent\SoftDeletes as EloquentSoftDeletes;

trait SoftDeletes
{
    use EloquentSoftDeletes, CascadeSoftDeletes;

    //protected array $cascadeDeletes;
}
