<?php

use App\Account;
use Faker\Generator as Faker;

$factory->define(Account::class, function (Faker $faker) {
    $link = 'http://'.$faker->freeEmailDomain;
    return [
        'link' => $link
    ];
});
