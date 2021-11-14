<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Suburb;
use App\Models\Category;

class Job extends Model
{
    use HasFactory;

    const STATUS_NEW    = 'new';
    const STATUS_ACCEPTED = 'accepted';
    const STATUS_DECLINED = 'declined';
    /**
    * The attributes that are mass assignable.
    *
    * @var string[]
    */
    protected $fillable = [
    	'status',
    	'suburb_id',
    	'category_id',
    	'contact_name',
    	'contact_phone',
    	'contact_email',
    	'price',
    	'description'
    ];

    /**
     * Return list of status codes and labels
     * @return array
     */
    public static function listStatus()
    {
        return [
            self::STATUS_NEW    => 'new',
            self::STATUS_ACCEPTED => 'accepted',
            self::STATUS_DECLINED  => 'declined'
        ];
    }

    /**
     * Returns label of actual status
     * @param string
     */
    public function statusLabel()
    {
        $list = self::listStatus();
        // little validation here just in case someone mess things
        // up and there's a ghost status saved in DB
        return isset($list[$this->status]) 
            ? $list[$this->status] 
            : $this->status;
    }

    /**
     * Some actions will happen only if it's new, so I have 
     * this method for making things easier.
     * Other status doesn't have a specific method because
     * I usually don't compare agains them
     * @return status
     */
    public function newJobStatus()
    {
        return self::STATUS_NEW;
    }

    public function acceptedJobsStatus()
    {
        return self::STATUS_ACCEPTED;
    }

    public function isDeclined()
    {
        return $this->status == self::STATUS_DECLINED;
    }

    /**
     * Get the suburb for which job has been posted.
     */
    public function suburb(){
        return $this->belongsTo(Suburb::class);
    }

    /**
     * Get the category against which job has been posted.
     */
    public function category(){
        return $this->belongsTo(Category::class);    
    }

    public function getCreatedAtAttribute($date)
    {
            return \Carbon\Carbon::parse($date)->format('F j, Y @ g:i A'); 
    }

    public function getUpdatedAtAttribute($date)
    {
            return \Carbon\Carbon::parse($date)->format('F j, Y @ g:i A'); 
    }
}
