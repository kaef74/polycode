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
        Schema::create('dailies', function (Blueprint $table) {
                $table->id();
                $table->string('title');
                $table->text('description');
                $table->string('input_example')->nullable();
                $table->string('output_example')->nullable();
                $table->string('note')->nullable();
                $table->string('level');
                $table->foreignId('language_id')->constrained('languages');
                $table->boolean('active')->default(false);
                $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dailies');
    }
};
