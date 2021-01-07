<?php


namespace App\Traits;


use Exception;

trait HasNestedPermissions
{
    /**
     * HasNestedPermissions constructor.
     * @throws Exception
     */
    protected function __construct()
    {
        if (!method_exists($this, 'hasPermission')) {
            throw new Exception('Can\'t have nested permissions on ' . class_basename($this) . ' with out having permissions');
        }
    }
}
