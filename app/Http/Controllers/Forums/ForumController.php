<?php

namespace App\Http\Controllers\Forums;

use App\Http\Controllers\Controller;
use App\Http\Requests\Forum\ForumCreateRequest;
use App\Http\Requests\Forum\ForumUpdateRequest;
use App\Http\Resources\Forum\ForumResource;
use App\Models\Forum\Forum;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;
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
                ->allowedFilters('title')
                ->paginate($request->get('per_page', 20))
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param ForumCreateRequest $request
     * @return ForumResource|JsonResponse|object
     */
    public function store(ForumCreateRequest $request)
    {
        return (new ForumResource(Forum::create($request->validated())))->response()->setStatusCode(201);
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
                ->orWHere('slug', $forum)
                ->firstOrFail()
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param ForumUpdateRequest $request
     * @param Forum              $forum
     * @return ForumResource
     */
    public function update(ForumUpdateRequest $request, Forum $forum): ForumResource
    {
        return new ForumResource($forum->update($request->validated()));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Forum $forum
     * @return Response
     * @throws Exception
     */
    public function destroy(Forum $forum): Response
    {
        $forum->delete();

        return response('', 204);
    }
}
