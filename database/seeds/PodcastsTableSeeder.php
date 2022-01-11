<?php

use App\Podcast;
use Illuminate\Database\Seeder;

class PodcastsTableSeeder extends Seeder
{
    public function run()
    {
        factory(Podcast::class, 50)->create();
    }
}
