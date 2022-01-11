<?php

use App\Settings;
use Faker\Generator as Faker;

$factory->define(Settings::class, function (Faker $faker) {
    return [
        'title' => $faker->text(50),
        'description' => $faker->text(100),
        'logo' => $faker->imageUrl(300, 100),
        'copyright' => '© Podcasty 2019'
    ];
});
