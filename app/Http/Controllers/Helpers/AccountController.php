<?php

namespace App\Http\Controllers\Helpers;

use App\Settings;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AccountController extends Controller
{
    public static function create(Request $request, Settings $settings)
    {
        $accounts = $request->only([
            'patreon',
            'facebook',
            'twitter',
            'instagram',
            'linkedin',
            'youtube'
        ]);
        foreach($accounts as $name => $link) {
            $account = [ 'name' => $name, 'link' => $link ];
            $settings->accounts()->create($account);
        }
    }

    public static function edit(Request $request, Settings $settings)
    {
        $accounts = $request->only([
            'patreon',
            'facebook',
            'twitter',
            'instagram',
            'linkedin',
            'youtube'
        ]);
        foreach($accounts as $name => $link) {
            $settings->accounts()
                ->where('name', $name)
                ->update([ 'link' => $link ]);
        }
    }
}
