<?php

namespace App\Http\Resources\Forum;

use App\Models\Forum\Forum;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * Class ForumResource
 * @package App\Http\Resources\Forums
 * @property Forum $resource
 */
class ForumResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  $request
     * @return array
     */
    public function toArray($request): array
    {
        return [
            'id' => $this->resource->id,
            'title' => $this->resource->title,
            'slug' => $this->resource->slug,
            'description' => $this->resource->description,
            'icon' => $this->resource->icon,
            'boards' => BoardResource::collection($this->whenLoaded('boards')),
        ];
    }
}
