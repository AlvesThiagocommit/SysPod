<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAccountsTable extends Migration
{
    public function up()
    {
        Schema::create('accounts', function (Blueprint $table) {
            $accounts = [
                'patreon',
                'facebook',
                'twitter',
                'instagram',
                'linkedin',
                'youtube'
            ];
            $table->unsignedBigInteger('settings_id');
            $table->enum('name', $accounts)->unique();
            $table->string('link', 50);
            $table->timestamps();
            $table->foreign('settings_id')->references('id')->on('settings');
        });
    }

    public function down()
    {
        Schema::dropIfExists('accounts');
    }
}
