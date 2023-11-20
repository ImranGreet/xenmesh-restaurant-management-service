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
        Schema::create('settings_icons', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->default(1);
            $table->string('icon')->required();
            $table->string('icon_name')->required();
            $table->string('icon_category')->required();
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('settings_icons');
    }
};
