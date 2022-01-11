<?php

namespace App\Http\Controllers\Helpers;

class LogoController extends ImageController
{
    public function __construct($uri)
    {
        parent::__construct($uri);
        $this->width = 200;
        $this->type = 'logos';
        $this->store();
    }
}
