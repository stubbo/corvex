<?php

use App\Models\Accounts\User;
use App\Models\Nova\NovaUser;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bans', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignIdFor(User::class)
                ->references('id')
                ->on('users')
                ->cascadeOnDelete();
            $table->foreignIdFor(NovaUser::class, 'admin_id')
                ->references('id')
                ->on('nova_users')
                ->cascadeOnDelete();
            $table->string('reason')->nullable();
            $table->timestamp('unban_at')->nullable();
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
        Schema::dropIfExists('bans');
    }
}
