<?php

namespace App\Http\Controllers;

use App\Utils\Utils;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $validator = Utils::validate($request->all(), [
            'email' => 'required|string|email|exists:users,email|max:50',
            'password' => 'required|string|min:6,max:20',
        ]);
        if ($validator->fails()) {
            return Utils::invalid($validator);
        }
        $credentials = $request->only('email', 'password');
        $authenticate = Auth::attempt($credentials);
        if (!$authenticate) {
            return Utils::error('Invalid credentials');
        }
        $user = Auth::user();
        return Utils::response($user);
    }

    public function logout()
    {
        Auth::logout();
    }
}

//
