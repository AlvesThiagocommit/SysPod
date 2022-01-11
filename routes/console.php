<?php

use Illuminate\Foundation\Inspiring;

/*
|--------------------------------------------------------------------------
| Console Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of your Closure based console
| commands. Each Closure is bound to a command instance allowing a
| simple approach to interacting with each command's IO methods.
|
*/

/*
|------------------------------------------------- -------------------------
| Rotas do console
|------------------------------------------------- -------------------------
|
| Este arquivo é onde você pode definir todo o seu console baseado em Closure
| comandos. Cada Closure está vinculado a uma instância de comando permitindo um
| abordagem simples para interagir com os métodos de E/S de cada comando.
|
*/

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->describe('Display an inspiring quote');
