<?php

use App\Models\Accounts\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePlatformAccountsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('platform_accounts', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignIdFor(User::class)->references('id')->on('users')->cascadeOnDelete();
            $table->string('platform')->index();
            $table->bigInteger('platform_id'); // steam id, discord id
            $table->string('access_token')->nullable();
            $table->string('refresh_token')->nullable();
            $table->timestamp('expires_at')->nullable();
            $table->timestamp('last_used')->nullable();
            $table->softDeletes();
            $table->timestamps();

            $table->unique(['user_id', 'platform']);
            $table->unique(['platform', 'platform_id']);
            $table->index(['platform', 'platform_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('platform_accounts');
    }
}
