<?php

namespace App\Http\Controllers\Forums;

use App\Http\Controllers\Controller;
use App\Http\Resources\Forum\BoardBreadcrumbResource;
use App\Models\Forum\Board;
use App\Models\Forum\Forum;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Spatie\QueryBuilder\QueryBuilder;

class BoardsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @param Forum   $forum
     * @return AnonymousResourceCollection
     */
    public function index(Request $request, Forum $forum): AnonymousResourceCollection
    {
        $query = $forum->boards();

        return BoardBreadcrumbResource::collection(
            QueryBuilder::for($query)
                ->allowedIncludes('parent', 'children')
                ->allowedFilters('title', 'parent_id')
                ->paginate($request->get('per_page', 20))
        );
    }

    /**
     * Display the specified resource.ye
     *
     * @param string $board
     * @return BoardBreadcrumbResource
     */
    public function show(string $board): BoardBreadcrumbResource
    {
        return new BoardBreadcrumbResource(
            QueryBuilder::for(Board::class)
                ->allowedIncludes(['parent', 'children'])
                ->allowedFilters('parent_id')
                ->where('id', $board)
                ->orWHere('slug', $board)
                ->firstOrFail()
        );
    }
}
