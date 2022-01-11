<?php

use Illuminate\Database\Seeder;
use App\Host;

class HostsTableSeeder extends Seeder
{
    public function run()
    {
        factory(Host::class, 50)->create();
    }
}
