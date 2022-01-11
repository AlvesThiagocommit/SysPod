<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class HostAccount extends Model
{
    protected $fillable = [
        'name',
        'link'
    ];
}
