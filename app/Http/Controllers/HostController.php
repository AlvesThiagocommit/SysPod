<?php

namespace App\Http\Controllers;

use App\Host;
use App\Utils\Utils;
use Illuminate\Http\Request;
use App\Http\Controllers\Helpers\AvatarController as Avatar;
use App\Http\Controllers\Helpers\HostAccountController as HostAccount;

class HostController extends Controller
{
    public function create(Request $request) //
    {
        $validator = Utils::validate($request->all(), [
            'name' => 'required|string|max:50',
            'about' => 'required|string|max:100',
            'avatar' => 'required|string',
            'facebook' => 'required|url|max:50',
            'twitter' => 'required|url|max:50',
            'instagram' => 'required|url|max:50',
            'linkedin' => 'required|url|max:50',
            'youtube' => 'required|url|max:50'
        ]);
        if ($validator->fails()) {
            return Utils::invalid($validator);
        }
        $avatar = new Avatar($request->avatar);
        $host = Host::create([
            'name' => $request->name,
            'about' => $request->about,
            'avatar' =>  $avatar->url(),
            'position' => Host::position()
        ]);
        HostAccount::create($request, $host);
        return Utils::response($host);
    }

    public function list() // 
    {
        $hosts = Host::orderBy('position')
            ->with('accounts')
            ->get();
        return Utils::response($hosts);
    }

    public function paginate() // 
    {
        $hosts = Host::latest('id')->paginate();
        return Utils::response($hosts);
    }

    public function trash()  // 
    {
        $hosts = Host::onlyTrashed()
            ->latest('deleted_at')
            ->paginate();
        return Utils::response($hosts);
    }

    public function read($host) //
    {
        $host = Host::with('accounts')->find($host);
        return Utils::response($host);
    }

    public function edit(Request $request, Host $host) //
    {
        $validator = Utils::validate($request->all(), [
            'name' => 'required|string|max:50',
            'about' => 'required|string|max:100',
            'avatar' => 'nullable|string',
            'facebook' => 'required|url|max:50',
            'twitter' => 'required|url|max:50',
            'instagram' => 'required|url|max:50',
            'linkedin' => 'required|url|max:50',
            'youtube' => 'required|url|max:50'
        ]);
        if ($validator->fails()) {
            return Utils::invalid($validator);
        }
        $host->update([
            'name' => $request->name,
            'about' => $request->about
        ]);
        if ($request->avatar) {
            $avatar = new Avatar($request->avatar);
            $host->update([ 'avatar' => $avatar->url() ]);
        }
        HostAccount::edit($request, $host);
        return Utils::response($host);
    }

    public function delete(Host $host)
    {
        $host->delete();
    }

    public function restore($host)
    {
        $host = Host::onlyTrashed()->find($host);
        if (!$host) return abort(404);
        $host->restore();
    }

    public function count()
    {
        $count = [ 'count' => Host::count() ];
        return Utils::response($count);
    }
}
