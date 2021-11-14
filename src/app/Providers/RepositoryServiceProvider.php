<?php

namespace App\Providers;

use App\Repository\Eloquent\BaseRepository;
use App\Repository\Eloquent\JobRepository;
use App\Repository\Eloquent\CategoryRepository;
use App\Repository\Eloquent\SuburbRepository;
use App\Repository\EloquentRepositoryInterface;
use App\Repository\JobRepositoryInterface;
use App\Repository\SuburbRepositoryInterface;
use App\Repository\CategoryRepositoryInterface;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(EloquentRepositoryInterface::class, BaseRepository::class);
         $this->app->bind(JobRepositoryInterface::class, JobRepository::class);
         $this->app->bind(SuburbRepositoryInterface::class, SuburbRepository::class);
         $this->app->bind(CategoryRepositoryInterface::class, CategoryRepository::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
