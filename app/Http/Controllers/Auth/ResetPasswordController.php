<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\ResetsPasswords;

class ResetPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset requests
    | and uses a simple trait to include this behavior. You're free to
    | explore this trait and override any methods you wish to tweak.
    |
    */

    /*
    |------------------------------------------------- -------------------------
    | Controlador de redefinição de senha
    |------------------------------------------------- -------------------------
    |
    | Este controlador é responsável por lidar com solicitações de redefinição de senha
    | e usa uma característica simples para incluir esse comportamento.
    |
    */

    use ResetsPasswords;

    /**
     * Where to redirect users after resetting their password.
     * Redireciona para para pagina a escolha.
     * @var string
     */
    protected $redirectTo = '/home';
}
