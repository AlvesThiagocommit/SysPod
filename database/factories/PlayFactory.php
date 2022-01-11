<?php

use App\Play;
use Illuminate\Support\Carbon;

$factory->define(Play::class, function () {
    $createdAt = Carbon::now()->subDays(rand(0, 30));
    return [
        'created_at' => $createdAt
    ];
});
