<?php

namespace App\Http\Controllers\Forums;

use App\Http\Controllers\Controller;
use App\Http\Resources\Forum\ForumResource;
use App\Models\Forum\Forum;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Spatie\QueryBuilder\QueryBuilder;

class ForumController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return AnonymousResourceCollection
     */
    public function index(Request $request): AnonymousResourceCollection
    {
        return ForumResource::collection(
            QueryBuilder::for(Forum::class)
                ->allowedIncludes(['boards'])
                ->allowedFilters(['title'])
                ->paginate($request->get('per_page', 20))
        );
    }

    /**
     * Display the specified resource.
     *
     * @param string $forum
     * @return ForumResource
     */
    public function show(string $forum): ForumResource
    {
        return new ForumResource(
            QueryBuilder::for(Forum::class)
                ->allowedIncludes(['boards'])
                ->where('id', $forum)
                ->orWhere('slug', $forum)
                ->firstOrFail()
        );
    }
}
