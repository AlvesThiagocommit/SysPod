<?php

namespace App\Http\Controllers\Helpers;

class AvatarController extends ImageController
{
    public function __construct($uri)
    {
        parent::__construct($uri);
        $this->width = 250;
        $this->type = 'avatars';
        $this->store();
    }
}
