<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJobsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jobs', function (Blueprint $table) {
            $table->increments('id');
            $table->string('status',50)->nullable('false')->default('new');
            $table->integer('suburb_id')->unsigned()->nullable('false');
            $table->integer('category_id')->unsigned()->nullable('false');
            $table->string('contact_name')->nullable('false');
            $table->string('contact_phone')->nullable('false');
            $table->string('contact_email')->nullable('false');
            $table->integer('price')->nullable('false')->unsigned();
            $table->text('description')->nullable('false');
            $table->index(['suburb_id','category_id']); 
            $table->timestamps();
        });

        Schema::table('jobs', function (Blueprint $table) {
            $table->foreign('suburb_id')->references('id')->on('suburbs');
            $table->foreign('category_id')->references('id')->on('categories');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('jobs');
    }
}
