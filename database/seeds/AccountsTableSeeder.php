<?php

use App\Account;
use App\Settings;
use Illuminate\Database\Seeder;

class AccountsTableSeeder extends Seeder
{
    private function accounts()
    {
        $accounts = [
            'patreon',
            'facebook',
            'twitter',
            'instagram',
            'linkedin',
            'youtube'
        ];
        return $accounts;
    }

    private function data($settings, $account)
    {
        $data = [
            'settings_id' => $settings->id,
            'name' => $account
        ];
        return $data;
    }

    public function run()
    {
        $settings = Settings::first();
        foreach($this->accounts() as $account) {
            $data = $this->data($settings, $account);
            factory(Account::class, 1)->create($data);
        }
    }
}
