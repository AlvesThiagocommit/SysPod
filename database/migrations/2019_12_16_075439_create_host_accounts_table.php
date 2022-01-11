<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHostAccountsTable extends Migration
{
    public function up()
    {
        Schema::create('host_accounts', function (Blueprint $table) {
            $accounts = [
                'facebook',
                'twitter',
                'instagram',
                'linkedin',
                'youtube'
            ];
            $table->unsignedBigInteger('host_id');
            $table->enum('name', $accounts);
            $table->string('link', 50);
            $table->timestamps();
            $table->foreign('host_id')->references('id')->on('hosts');
        });
    }

    public function down()
    {
        Schema::dropIfExists('host_accounts');
    }
}
