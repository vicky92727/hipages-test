<?php

namespace App\Repository\Eloquent;

use App\Models\Job;
use App\Repository\JobRepositoryInterface;

class JobRepository extends BaseRepository implements JobRepositoryInterface
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
    public function __construct(Job $model)
    {
        $this->model = $model;
    }

    public function updateLeads($request, $id)
    {
        $data = $request->all();
        $data['status'] = $data['status'];
        $lead = $this->update($id, $data);
        if($data['status'] == $this->model::STATUS_ACCEPTED){
            $leads['accepted'] = $this->getAcceptedleads();
        }
        return $leads;
    }
    public function getInvitedLeads()
    {
        $status = $this->model->newJobStatus();
        $invitedLeads = $this->model->where(['status' => $status])->with('suburb','category')->get();
        return $invitedLeads;
    }

    public function getAcceptedleads()
    {
        $status = $this->model->acceptedJobsStatus();
        $acceptedleads = $this->model->where(['status' => $status])->with('suburb','category')->get();
        return $acceptedleads;
    }
}