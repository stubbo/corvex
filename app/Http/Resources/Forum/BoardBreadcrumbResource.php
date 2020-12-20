<?php

namespace App\Http\Resources\Forum;

use Illuminate\Http\Resources\Json\JsonResource;

class BoardBreadcrumbResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param $request
     * @return array
     */
    public function toArray($request): array
    {
        return array_merge((new BoardResource($this->resource))->toArray($request), [
            'breadcrumbs' => $this->resource->generateBreadcrumb(),
        ]);
    }
}
