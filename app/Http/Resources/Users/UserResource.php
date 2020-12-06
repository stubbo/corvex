<?php

namespace App\Http\Resources\Users;

use Illuminate\Http\Resources\Json\JsonResource;


class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param $request
     * @return array
     */
    public function toArray($request): array
    {
        return [
            'id' => $this->resource->id,
            'username' => $this->resource->username,
            'avatar' => $this->resource->avatarUrl,
        ];
    }
}
