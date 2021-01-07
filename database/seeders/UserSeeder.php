<?php

namespace Database\Seeders;

use App\Models\Accounts\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if (config('app.env') === 'production') {
            return;
        }

        User::factory()
            ->count(200)
            ->create();
    }
}
