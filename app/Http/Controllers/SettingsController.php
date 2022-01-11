<?php

namespace App\Http\Controllers;

use App\Settings;
use App\Utils\Utils;
use Illuminate\Http\Request;
use App\Http\Controllers\Helpers\LogoController as Logo;
use App\Http\Controllers\Helpers\AccountController as Account;

class SettingsController extends Controller
{
    public function create(Request $request)
    {
        $settings = Settings::first();
        if ($settings) {
            return Utils::error('Already created', 400);
        }
        $validator = Utils::validate($request->all(), [
            'title' => 'required|string|max:50',
            'description' => 'required|string|max:100',
            'logo' => 'required|string',
            'copyright' => 'required|string|max:50',
            'patreon' => 'required|string|max:50',
            'facebook' => 'required|url|max:50',
            'twitter' => 'required|url|max:50',
            'instagram' => 'required|url|max:50',
            'linkedin' => 'required|url|max:50',
            'youtube' => 'required|url|max:50'
        ]);
        if ($validator->fails()) {
            return Utils::invalid($validator);
        }
        $logo = new Logo($request->logo);
        $settings = Settings::create([
            'title' => $request->title,
            'description' => $request->description,
            'logo' =>  $logo->url(),
            'copyright' => $request->copyright
        ]);
        Account::create($request, $settings);
        return Utils::response($settings);
    }

    public function read()
    {
        $settings = Settings::with('accounts')->first();
        return Utils::response($settings);
    }

    public function edit(Request $request)
    {
        $validator = Utils::validate($request->all(), [
            'title' => 'required|string|max:50',
            'description' => 'required|string|max:100',
            'logo' => 'nullable|string',
            'copyright' => 'required|string|max:50',
            'patreon' => 'required|string|max:50',
            'facebook' => 'required|url|max:50',
            'twitter' => 'required|url|max:50',
            'instagram' => 'required|url|max:50',
            'linkedin' => 'required|url|max:50',
            'youtube' => 'required|url|max:50'
        ]);
        if ($validator->fails()) {
            return Utils::invalid($validator);
        }
        $settings = Settings::first();
        if (!$settings) return abort(404);
        $settings->update([
            'title' => $request->title,
            'description' => $request->description,
            'copyright' => $request->copyright
        ]);
        if ($request->logo) {
            $logo = new Logo($request->logo);
            $settings->update([ 'logo' =>  $logo->url() ]);
        }
        Account::edit($request, $settings);
        $settings = Settings::with('accounts')->first();
        return Utils::response($settings);
    }
}
