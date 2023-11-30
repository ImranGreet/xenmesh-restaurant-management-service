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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->text('order_number')->nullable();
            $table->foreignId('table_id')->nullable();
            $table->foreignId('customer_id');
            $table->dateTime('order_time');
            $table->enum('order_processing_status', ['Pending', 'Processing', 'Done','Cancel']);
            $table->enum('status', ['hold', 'unhold']);
            $table->enum('delivery_way', ['PayFirst', 'Dining', 'FoodPanda','Pathao']);
            $table->decimal('subtotal', 16, 2);
            $table->decimal('discount_rate', 16, 2)->default(0);
            $table->decimal('discount_amount', 16, 2)->default(0);
            $table->decimal('amount_after_discount', 16, 2)->default(0);
            $table->decimal('special_discount', 16, 2)->default(0);
            $table->decimal('total', 16, 2)->default(0);
            $table->decimal('paid_amount', 16, 2)->default(0);
            $table->decimal('change_amount', 16, 2)->default(0);
            $table->foreignId('user_id');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
