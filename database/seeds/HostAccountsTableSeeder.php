<?php

use App\Host;
use App\HostAccount;
use Illuminate\Database\Seeder;

class HostAccountsTableSeeder extends Seeder
{
    private function accounts()
    {
        $accounts = [
            'facebook',
            'twitter',
            'instagram',
            'linkedin',
            'youtube'
        ];
        return $accounts;
    }

    private function data($host, $account)
    {
        $data = [
            'host_id' => $host->id,
            'name' => $account
        ];
        return $data;
    }

    public function run()
    {
        $hosts = Host::all();
        $accounts = $this->accounts();
        foreach($hosts as $host) {
            foreach($accounts as $account) {
                $data = $this->data($host, $account);
                factory(HostAccount::class, 1)->create($data);
            }
        }
    }
}
