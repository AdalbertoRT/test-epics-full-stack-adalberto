<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name', 50);
            $table->string('email', 100)->unique();
            $table->string('picture', 255)->nullable()->default('default.jpg');
            $table->char('phone_number', 11)->nullable();
            $table->date('birthdate')->nullable();
            $table->enum('gender', ['male', 'female', 'others'])->nullable();
            $table->enum('membership', ['yes', 'no'])->default('no');
            $table->float('ltv', 8, 2)->nullable()->default(0.00);
            $table->dateTime('last_visit')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
