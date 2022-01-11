<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Carbon\Carbon;

class CreateVisitsTable extends Migration
{
    public function up()
    {
        Schema::create('visits', function (Blueprint $table) {
            $table->timestamp('created_at')->default(Carbon::now());
        });
    }

    public function down()
    {
        Schema::dropIfExists('visits');
    }
}
