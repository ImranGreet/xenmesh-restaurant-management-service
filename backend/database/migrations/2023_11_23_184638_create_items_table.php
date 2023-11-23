<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->foreignId('categories_id');
            $table->string('title');
            $table->string('slug');
            $table->string('product_thumb');
            $table->longText('description')->nullable();
            $table->longText('composition')->nullable();
            $table->integer('price');
            $table->integer('specific_dis')->nullable();
            $table->boolean('status')->default(0);
            $table->integer('editd_by');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('items');
    }
};
