<?php

namespace App\Http\Middleware;

use Closure;
use App\User;
use Exception;
use App\Settings;
use App\Utils\Utils;

class FreshDeployment
{
    public function handle($request, Closure $next)
    {
        try {
            $users = User::count();
            $settings = Settings::count();
            if ($users && $settings) {
                return Utils::error('Already installed', 403);
            }
            return $next($request);
        } catch(Exception $e) {
            return $next($request);
        }
    }
}
