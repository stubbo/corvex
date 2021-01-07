<?php

namespace App\Traits;

use Exception;
use Illuminate\Support\Str;

/**
 * Trait HasPermissions
 * @package App\Traits
 */
trait HasSystemPermission
{
    /**
     * @param string $system
     * @param array  $permissions
     * @return bool
     */
    public function hasPermissions(string $system, array $permissions): bool
    {
        try {
            return $this->permissions()
                ->where(array_merge($permissions, ['system' => $system]))
                ->exists();
        } catch (Exception $exception) {
            return false;
        }
    }

    /**
     * @param string $system
     * @param string $permission
     * @return bool
     */
    public function hasPermission(string $system, string $permission): bool
    {
        if (!Str::startsWith('can_', $permission)) {
            $permission = 'can_' . $permission;
        }

        return $this->hasPermissions($system, [$permission => true]);
    }
}
