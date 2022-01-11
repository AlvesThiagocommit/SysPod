<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePodcastsTable extends Migration
{
    public function up()
    {
        Schema::create('podcasts', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title', 100);
            $table->unsignedInteger('episode')->unique();
            $table->string('note', 500);
            $table->string('thumbnail', 125);
            $table->string('audio', 125);
            $table->boolean('is_private');
            $table->dateTime('scheduled_at')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::dropIfExists('podcasts');
    }
}
