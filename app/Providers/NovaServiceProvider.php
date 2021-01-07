<?php

namespace App\Providers;

use App\Models\Nova\NovaUser;
use App\Nova\Metrics\Forums\NewBoardsPerDay;
use App\Nova\Metrics\Forums\NewForumsPerDay;
use App\Nova\Metrics\Forums\TotalBoards;
use App\Nova\Metrics\Forums\TotalForums;
use App\Nova\Metrics\User\NewUsersPerDay;
use App\Nova\Metrics\User\TotalUsers;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Hash;
use Laravel\Nova\Nova;
use Laravel\Nova\NovaApplicationServiceProvider;

class NovaServiceProvider extends NovaApplicationServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        Nova::createUserUsing(function($command) {
            return [
                $command->ask('Name'),
                $command->ask('Email Address'),
                $command->secret('Password'),
            ];
        }, function($name, $email, $password) {
            NovaUser::create([
                'name' => $name,
                'email' => $email,
                'password' => Hash::make($password),
                'email_verified_at' => now(),
                'activated_at' => now(), // my custom field
            ]);
        });

        Nova::style('style-changes', public_path('css/nova-edits.css'));
    }

    /**
     * Register the Nova routes.
     *
     * @return void
     */
    protected function routes()
    {
        Nova::routes()
                ->withAuthenticationRoutes()
                ->withPasswordResetRoutes()
                ->register();
    }

    /**
     * Register the Nova gate.
     *
     * This gate determines who can access Nova in non-local environments.
     *
     * @return void
     */
    protected function gate()
    {
        Gate::define('viewNova', function ($user) {
            return in_array($user->email, config('auth.admin_emails'));
        });
    }

    /**
     * Get the cards that should be displayed on the default Nova dashboard.
     *
     * @return array
     */
    protected function cards(): array
    {
        return [
            new NewUsersPerDay,
            new TotalUsers,
            new NewForumsPerDay,
            new TotalForums,
            new NewBoardsPerDay,
            new TotalBoards,
        ];
    }

    /**
     * Get the extra dashboards that should be displayed on the Nova dashboard.
     *
     * @return array
     */
    protected function dashboards(): array
    {
        return [];
    }

    /**
     * Get the tools that should be listed in the Nova sidebar.
     *
     * @return array
     */
    public function tools(): array
    {
        return [];
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
