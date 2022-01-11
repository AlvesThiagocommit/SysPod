<?php

use App\Visit;
use Illuminate\Database\Seeder;

class VisitsTableSeeder extends Seeder
{
    public function run()
    {
        $count = rand(1000, 1500);
        factory(Visit::class, $count)->create();
    }
}
