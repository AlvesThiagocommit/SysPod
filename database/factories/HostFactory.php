<?php

use App\Host;
use Faker\Generator as Faker;

$factory->define(Host::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'about' => $faker->text(100),
        'avatar' => $faker->imageUrl(200, 300),
        'position' => $faker->unique()->numberBetween(0, 1000)
    ];
});
