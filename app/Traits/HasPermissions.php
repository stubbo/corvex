<?php

namespace App\Traits;

use App\Models\Accounts\Permission;
use Exception;
use Illuminate\Support\Str;

/**
 * Trait HasPermissions
 * @package App\Traits
 *
 * @property string $permissionSystem
 */
trait HasPermissions
{
    /**
     * HasPermissions constructor.
     * @throws Exception
     */
    protected function __construct()
    {
        if (empty($this->permissionSystem)) {
            throw new Exception('Missing definition of the permission system for '  . class_basename($this));
        }
    }

    /**
     * @param array  $permissions
     * @return bool
     */
    public function hasPermissions(array $permissions): bool
    {
        try {
            return Permission::where(array_merge($permissions, ['system' => $this->permissionSystem]))->exists();
        } catch (Exception $exception) {
            return false;
        }
    }

    /**
     * @param string $permission
     * @return bool
     */
    public function hasPermission(string $permission): bool
    {
        if (!Str::startsWith('can_', $permission)) {
            $permission = 'can_' . $permission;
        }

        return $this->hasPermissions([$permission => true]);
    }
}
