<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $this->call(UsersTableSeeder::class);
        $this->call(HostsTableSeeder::class);
        $this->call(HostAccountsTableSeeder::class);
        $this->call(PodcastsTableSeeder::class);
        $this->call(PlaysTableSeeder::class);
        $this->call(SettingsTableSeeder::class);
        $this->call(AccountsTableSeeder::class);
        $this->call(VisitsTableSeeder::class);
    }
}
