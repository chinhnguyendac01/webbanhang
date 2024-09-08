<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Carbon\Carbon;
return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user_payment', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('user_name');
            $table->string('address')->nullable();;
            $table->string('phone')->nullable();;
            $table->string('quantity')->nullable();;
            $table->uuid('product_id')->nullable();
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_payment');
    }
};
