<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Podcast extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'title',
        'episode',
        'note',
        'thumbnail',
        'audio',
        'is_private',
        'scheduled_at'
    ];

    public function plays()
    {
        return $this->hasMany('App\Play');
    }
}
