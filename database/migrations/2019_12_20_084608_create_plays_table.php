<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Carbon\Carbon;

class CreatePlaysTable extends Migration
{
    public function up()
    {
        Schema::create('plays', function (Blueprint $table) {
            $table->unsignedBigInteger('podcast_id');
            $table->timestamp('created_at')->default(Carbon::now());
            $table->foreign('podcast_id')->references('id')->on('podcasts');
        });
    }

    public function down()
    {
        Schema::dropIfExists('plays');
    }
}
