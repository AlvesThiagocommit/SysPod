<?php

namespace App\Http\Controllers\Helpers;

use App\Host;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class HostAccountController extends Controller
{
    public static function create(Request $request, Host $host)
    {
        $accounts = $request->only([
            'facebook',
            'twitter',
            'instagram',
            'linkedin',
            'youtube'
        ]);
        foreach($accounts as $name => $link) {
            $account = [ 'name' => $name, 'link' => $link ];
            $host->accounts()->create($account);
        }
    }

    public static function edit(Request $request, Host $host)
    {
        $accounts = $request->only([
            'facebook',
            'twitter',
            'instagram',
            'linkedin',
            'youtube'
        ]);
        foreach($accounts as $name => $link) {
            $host->accounts()
                ->where('name', $name)
                ->update([ 'link' => $link ]);
        }
    }
}
