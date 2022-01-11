<?php

use Illuminate\Database\Seeder;

use App\Play;
use App\Podcast;

class PlaysTableSeeder extends Seeder
{
    public function run()
    {
        $podcasts = Podcast::all();
        $podcasts->each(function($podcast) {
            $count = rand(1, 100);
            factory(Play::class, $count)->create([ 'podcast_id' => $podcast->id ]);
        });
    }
}
