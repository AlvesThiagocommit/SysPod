<?php

namespace App\Http\Controllers\Helpers;

use App\User;
use Exception;
use Illuminate\Support\Facades\Storage;

class ServerVerify
{
    public static function database ()
    {
        try {
            User::count();
            return true;
        } catch (Exception $e) {
            return false;
        }
    }

    public static function storage ()
    {
        try {
            $path = 'test/file.txt';
            $disk = Storage::disk('s3');
            $isExists = $disk->exists($path);
            if ($isExists) $disk->delete($path);
            $disk->put($path, 'test');
            $disk->url($path);
            $disk->delete($path);
            return true;
        } catch (Exception $e) {
            return false;
        }
    }
}
