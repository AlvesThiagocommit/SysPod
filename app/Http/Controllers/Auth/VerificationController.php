<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\VerifiesEmails;

class VerificationController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Email Verification Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling email verification for any
    | user that recently registered with the application. Emails may also
    | be re-sent if the user didn't receive the original email message.
    |
    */

    /*
    |------------------------------------------------- -------------------------
    | Controlador de verificação de e-mail
    |------------------------------------------------- -------------------------
    |
    | Este controlador é responsável por lidar com a verificação de e-mail para qualquer
    | usuário que se registrou recentemente no aplicativo. Os e-mails também podem
    | ser reenviado caso o usuário não tenha recebido a mensagem de e-mail original.
    |
    */

    use VerifiesEmails;

    /**
     * Where to redirect users after verification.
     * Redirediciona o usuario para uma rota especifica exemplo "/home"
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     * Cria nova instancia do controlador
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('signed')->only('verify');
        $this->middleware('throttle:6,1')->only('verify', 'resend');
    }
}
