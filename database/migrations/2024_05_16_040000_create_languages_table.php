<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('languages', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();
        });

        // Заполнение таблицы уровней предопределенными данными
        DB::table('languages')->insert([
            ['name' => 'Python'],
            ['name' => 'JavaScript'],
            ['name' => 'Java'],
            ['name' => 'C#'],
            ['name' => 'C++'],
            ['name' => 'Php'],
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('languages');
    }
};
