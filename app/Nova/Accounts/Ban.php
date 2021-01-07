<?php

namespace App\Nova\Accounts;

use App\Nova\NovaUser;
use App\Nova\Resource;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\DateTime;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Text;

class Ban extends Resource
{
    /**
     * The model the resource corresponds to.
     *
     * @var string
     */
    public static $model = \App\Models\Accounts\Ban::class;

    /**
     * The single value that should be used to represent the resource when being displayed.
     *
     * @var string
     */
    public static $title = 'user.name';

    public static $group = 'Accounts';

    /**
     * The columns that should be searched.
     *
     * @var array
     */
    public static $search = [
        'id', 'reason', 'unban_at'
    ];

    public static $with = ['user'];

    public function title()
    {
        return $this->user->username;
    }

    public function subtitle()
    {
        return $this->reason;
    }

    /**
     * Get the fields displayed by the resource.
     *
     * @param  $request
     * @return array
     */
    public function fields(Request $request)
    {
        return [
            ID::make(__('ID'), 'id')->sortable(),
            Text::make('Reason'),
            DateTime::make('Unban At'),
            BelongsTo::make('User')->searchable(),
            BelongsTo::make('Nova User', 'admin', NovaUser::class)->searchable(),
        ];
    }

    /**
     * Get the cards available for the request.
     *
     * @param $request
     * @return array
     */
    public function cards(Request $request)
    {
        return [];
    }

    /**
     * Get the filters available for the resource.
     *
     * @param $request
     * @return array
     */
    public function filters(Request $request)
    {
        return [];
    }

    /**
     * Get the lenses available for the resource.
     *
     * @param $request
     * @return array
     */
    public function lenses(Request $request)
    {
        return [];
    }

    /**
     * Get the actions available for the resource.
     *
     * @param $request
     * @return array
     */
    public function actions(Request $request)
    {
        return [];
    }
}
