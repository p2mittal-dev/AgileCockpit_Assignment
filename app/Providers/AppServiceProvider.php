<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;


use App\Repository\ISchoolRepository;
use App\Repository\SchoolRepository;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(ISchoolRepository::class, SchoolRepository::class);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
