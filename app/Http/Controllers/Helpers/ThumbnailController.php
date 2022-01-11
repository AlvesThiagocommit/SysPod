<?php

namespace App\Http\Controllers\Helpers;

class ThumbnailController extends ImageController
{
    public function __construct($uri)
    {
        parent::__construct($uri);
        $this->width = 150;
        $this->type = 'thumbnails';
        $this->store();
    }
}
