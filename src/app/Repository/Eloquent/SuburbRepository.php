<?php

namespace App\Repository\Eloquent;

use App\Models\Suburb;
use App\Repository\SuburbRepositoryInterface;

class SuburbRepository extends BaseRepository implements SuburbRepositoryInterface
{
    /**
     * @var Model
     */
    protected $model;

    /**
     * BaseRepository constructor.
     *
     * @param Model $model
     */
    public function __construct(Suburb $model)
    {
        $this->model = $model;
    }
}