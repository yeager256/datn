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
            $table->foreignId('address_id')->constrained()->cascadeOnDelete();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('voucher_id')->nullable()->constrained()->nullOnDelete();
            $table->string('order_code',9);
            $table->double('shipping_fee')->default(0);
            $table->double('subtotal')->default(0);
            $table->double('total')->default(0);
            $table->enum('payment_method',['cod','banking'])->default('cod');
            $table->boolean('payment_status')->default(false);
            $table->enum('status',['new','processing','on_delivery','completed','cancelled'])->default('new');
            $table->text('note')->nullable();

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
