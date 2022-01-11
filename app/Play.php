<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Play extends Model
{
    public $timestamps = false;
    protected $fillable = [ 'created_at' ];
}
