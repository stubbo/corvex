<?php

namespace App\Http\Controllers\Forums;

use App\Http\Controllers\Controller;
use App\Http\Resources\Forum\BoardResource;
use App\Models\Forum\Forum;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Spatie\QueryBuilder\QueryBuilder;

class ForumBoardsController extends Controller
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

        return BoardResource::collection(
            QueryBuilder::for($query)
                ->allowedIncludes(['parent', 'children'])
                ->allowedFilters('title')
                ->paginate($request->get('per_page', 20))
        );
    }

    // todo: finish resource
}
