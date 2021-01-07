<?php

namespace App\Casts;

use Illuminate\Contracts\Database\Eloquent\CastsAttributes;
use Illuminate\Support\Str;

class ColorCaster implements CastsAttributes
{
    /**
     * Cast the given value.
     *
     * @param        $model
     * @param string $key
     * @param mixed  $value
     * @param array  $attributes
     * @return mixed
     */
    public function get($model, $key, $value, $attributes)
    {
        $hex = dechex($value);

        return "#{$hex}";
    }

    /**
     * Prepare the given value for storage.
     *
     * @param        $model
     * @param string $key
     * @param mixed  $value
     * @param array  $attributes
     * @return mixed
     */
    public function set($model, $key, $value, $attributes)
    {
        return hexdec(Str::replaceFirst('#','', $value));
    }
}
