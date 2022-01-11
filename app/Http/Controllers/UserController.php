<?php

namespace App\Http\Controllers;

use App\User;
use App\Utils\Utils;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;


class UserController extends Controller
{
    public function create(Request $request)
    {
        $user = User::first();
        if ($user) {
            return Utils::error('Already created');
        }
        $validator = Utils::validate($request->all(), [
            'email' => 'required|string|email|unique:users,email|max:50',
            'password' => 'required|string|min:6,max:20',
        ]);
        if ($validator->fails()) {
            return Utils::invalid($validator);
        }
        $user = User::create([
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'api_token' =>  Utils::nanoid()
        ]);
        return Utils::response($user);
    }

    public function read()
    {
        $user = User::first();
        return Utils::response($user);
    }

    public function edit(Request $request)
    {
        $user = User::first();
        $validator = Utils::validate($request->all(), [
            'email' => 'required|string|email|unique:users,email,'.$user->id.'|max:50',
            'password' => 'nullable|string|min:6,max:20',
        ]);
        if ($validator->fails()) {
            return Utils::invalid($validator);
        }
        $user->update([ 'email' => $request->email ]);
        if ($request->password) {
            $password = Hash::make($request->password);
            $user->update([ 'password' => $password ]);
        }
        return Utils::response($user);
    }
}
