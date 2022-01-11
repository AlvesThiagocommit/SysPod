<?php

namespace App\Http\Controllers;

use App\Utils\Utils;
use App\Http\Controllers\Helpers\ServerVerify;

class ServerController extends Controller
{
    public function verify()
    {
        $response = [
            'database' => ServerVerify::database(),
            'storage' => ServerVerify::storage()
        ];
        return Utils::response($response);
    }
}
