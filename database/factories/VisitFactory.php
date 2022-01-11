<?php

use App\Visit;
use Illuminate\Support\Carbon;

$factory->define(Visit::class, function () {
    $createdAt = Carbon::now()->subDays(rand(0, 30));
    return [
        'created_at' => $createdAt
    ];
});
