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
                $table->string('input_example');
                $table->string('output_example');
                $table->string('note');
                $table->foreignId('level_id')->constrained('levels');
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
