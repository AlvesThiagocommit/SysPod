<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/*
|------------------------------------------------- -------------------------
| Rotas da Web
|------------------------------------------------- -------------------------
|
| Aqui é onde você pode registrar rotas da web para seu aplicativo. Esses
| as rotas são carregadas pelo RouteServiceProvider dentro de um grupo que
| contém o grupo de middleware "web". Agora crie algo grande!
|
*/

Route::get('/{any}', 'SpaController@index')->where('any', '.*');