<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePermissionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('permissions', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuidMorphs('authority');
            $table->string('system');
            $table->nullableUuidMorphs('resource');
            $table->boolean('can_index')->nullable();
            $table->boolean('can_store')->nullable();
            $table->boolean('can_show')->nullable();
            $table->boolean('can_update')->nullable();
            $table->boolean('can_destroy')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('permissions');
    }
}
