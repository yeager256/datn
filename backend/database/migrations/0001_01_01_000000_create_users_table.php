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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid');
            $table->string('full_name')->nullable();
            $table->string('username');
            $table->string('email')->unique();
            $table->string('phone_number')->nullable();
            $table->string('avatar_url')->nullable();
            $table->string('thumbnail_url')->nullable();
            $table->string('birthday')->nullable(); 
            $table->string('address')->nullable();
            $table->string('password')->nullable();
            $table->boolean('is_blocked')->default(0);
            $table->string('remember_token')->nullable(); 
            $table->text('bio')->nullable();
            $table->integer('failed_attempts')->default(0);
            $table->timestamp('blocked_until')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->timestamps();
        });

        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->id();
            $table->string('email');
            $table->string('token');
            $table->timestamps();
        });
        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('sessions');
    }
};
