<?php

use App\Podcast;
use Faker\Generator as Faker;
use Illuminate\Support\Carbon;

$factory->define(Podcast::class, function (Faker $faker) {
    $scheduledAt = Carbon::now()->addDays(rand(0, 30));
    return [
        'title' => $faker->text(100),
        'episode' => $faker->unique()->numberBetween(1, 2500),
        'note' => $faker->text(500),
        'thumbnail' => $faker->imageUrl(100, 100),
        'audio' => 'https://bit.ly/2PGYLHe',
        'is_private' => $faker->boolean(),
        'scheduled_at' => $scheduledAt
    ];
});
