<?php

namespace App\Http\Resources\Forum;

use App\Models\Forums\Board;
use Illuminate\Http\Resources\Json\JsonResource;

class BoardResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param $request
     * @return array
     */
    public function toArray($request): array
    {
        $parent = $this->resource->parent()->getModel() instanceof Board ? BoardResource::class : ForumResource::class;

        return [
            'id' => $this->resource->id,
            'title' => $this->resource->title,
            'description' => $this->resource->description,
            'icon' => $this->resource->icon,
            'boards' => BoardResource::collection($this->whenLoaded('children')),
            'parent_id' => $this->resource->parent_id,
            'parent' => new $parent($this->whenLoaded('parent'))
        ];
    }
}
