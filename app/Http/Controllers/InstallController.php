<?php

namespace App\Http\Controllers;

use App\User;
use App\Settings;
use App\Utils\Utils;
use Exception;

class InstallController extends Controller
{
    public function verify () { //
        try {
            $users = User::count();
            $settings = Settings::count();
            if ($users && $settings) {
                return Utils::response(true);
            }
            return Utils::response(false, 404);
        } catch (Exception $e) {
            return Utils::response(false, 404);
        }
    }
}
