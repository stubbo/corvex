<?php

namespace App\Policies\Forum;

use App\Models\Accounts\User;
use App\Models\Forum\Board;
use Illuminate\Auth\Access\HandlesAuthorization;

class BoardPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the model.
     *
     * @param User  $user
     * @param Board $board
     * @return mixed
     */
    public function view(User $user, Board $board)
    {
        $permissions = $user->permissions;
    }
}
