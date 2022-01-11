<?php

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

/*
|------------------------------------------------- -------------------------
| Canais de transmissão
|------------------------------------------------- -------------------------
|
| Aqui você pode cadastrar todos os canais de transmissão de eventos que seu
| suportes de aplicativos. Os retornos de chamada de autorização de canal fornecidos são
| usado para verificar se um usuário autenticado pode ouvir o canal.
|
*/

Broadcast::channel('App.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});
