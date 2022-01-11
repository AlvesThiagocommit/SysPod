<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Settings extends Model
{
    protected $fillable = [
        'title',
        'description',
        'logo',
        'copyright'
    ];

    public function accounts ()
    {
        return $this->hasMany('App\Account');
    }
}
