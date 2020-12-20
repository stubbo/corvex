<?php

namespace App\Http\Controllers\Forums;

use App\Http\Controllers\Controller;
use App\Http\Requests\Forum\BoardCreateRequest;
use App\Http\Requests\Forum\ForumUpdateRequest;
use App\Http\Resources\Forum\BoardResource;
use App\Http\Resources\Forum\ForumResource;
use App\Models\Forum\Board;
use App\Models\Forum\Forum;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;
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

    /**
     * Store a newly created resource in storage.
     * @param BoardCreateRequest $request
     * @param Forum              $forum
     * @return BoardResource|JsonResponse|object
     */
    public function store(BoardCreateRequest $request, Forum $forum)
    {
        return (new BoardResource(
            $forum->boards()->create($request->validated())
        ))->response()->setStatusCode(201);
    }

    /**
     * Display the specified resource.ye
     *
     * @param Forum  $forum
     * @param string $board
     * @return ForumResource
     */
    public function show(Forum $forum, string $board): ForumResource
    {
        $query = $forum->boards();
        return new ForumResource(
            QueryBuilder::for($query)
                ->allowedIncludes(['parent', 'children'])
                ->where('id', $board)
                ->orWHere('slug', $board)
                ->firstOrFail()
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param ForumUpdateRequest $request
     * @param Board              $board
     * @return BoardResource
     */
    public function update(ForumUpdateRequest $request, Board $board): BoardResource
    {
        return new BoardResource($board->update($request->validated()));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Board $board
     * @return Response
     * @throws Exception
     */
    public function destroy(Board $board): Response
    {
        $board->delete();

        return response('', 204);
    }
}
