<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateLevelsTable extends Migration
{
    public function up()
    {
        Schema::create('levels', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100)->unique();
        });

        // Заполнение таблицы уровней предопределенными данными
        DB::table('levels')->insert([
            ['name' => 'начинающий'],
            ['name' => 'продвинутый'],
            ['name' => 'эксперт'],
            ['name' => 'мастер'],
            ['name' => 'легенда']
        ]);
    }

    public function down()
    {
        Schema::dropIfExists('levels');
    }
}
