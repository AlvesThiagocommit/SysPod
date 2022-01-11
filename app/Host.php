<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Host extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'name',
        'about',
        'avatar',
        'position'
    ];

    public static function position()
    {
        $current = self::max('position');
        $isEmpty = $current === null;
        $position = $isEmpty ? 0: $current + 1;
        return $position;
    }

    public function accounts()
    {
        return $this->hasMany('App\HostAccount');
    }
}
