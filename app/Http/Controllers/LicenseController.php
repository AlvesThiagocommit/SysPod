<?php

namespace App\Http\Controllers;

use Exception;
use App\Utils\Utils;
use Illuminate\Http\Request;
use GuzzleHttp\Client as Http;

class LicenseController extends Controller
{
    public function verify (Request $request) //
    {
        $validator = Utils::validate($request->all(), [
            'code' => 'required|string|max:100'
        ]);
        if ($validator->fails()) {
            return Utils::invalid($validator);
        }
        try {
            return Utils::response(['isVerified' => true]);
        } catch (Exception $e) {
            return Utils::error('Invalid purchase code', 400);
        }
    }
}
