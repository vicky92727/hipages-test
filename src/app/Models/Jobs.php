<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jobs extends Model
{
    use HasFactory;

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
}
