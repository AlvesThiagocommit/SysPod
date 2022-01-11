<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\ConfirmsPasswords;

class ConfirmPasswordController extends Controller
{
    /*
    |------------------------------------------------- -------------------------
    | Confirma controlador de senha
    |------------------------------------------------- -------------------------
    |
    | Este controlador é responsável por lidar com as confirmações de senha e
    | usa um traço simples para incluir o comportamento.
    |
    */

    use ConfirmsPasswords;

    /**
     * Aqui ele rediciona para pagina inicial caso erro de senha.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Criando nova instancia.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }
}
