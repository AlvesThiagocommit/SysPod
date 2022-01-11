<?php

use App\HostAccount;
use Faker\Generator as Faker;

$factory->define(HostAccount::class, function (Faker $faker) {
    $link = 'http://'.$faker->freeEmailDomain;
    return [
        'link' => $link
    ];
});
