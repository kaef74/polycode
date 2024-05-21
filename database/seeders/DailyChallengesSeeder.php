<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Challenge\Daily;
use App\Models\Language;
use App\Models\Level;
use Carbon\Carbon;

class DailyChallengesSeeder extends Seeder
{
    public function run()
    {
        // Получаем ID языков программирования
        $javascriptId = Language::where('name', 'JavaScript')->first()->id;
        $pythonId = Language::where('name', 'Python')->first()->id;
        $javaId = Language::where('name', 'Java')->first()->id;

        // Получаем ID уровней сложности
        $beginnerLevelId = Level::where('name', 'начинающий')->first()->id;
        $intermediateLevelId = Level::where('name', 'продвинутый')->first()->id;
        $expertLevelId = Level::where('name', 'эксперт')->first()->id;

        // Задаем данные для заданий
        $challenges = [
            [
                'title' => 'Базовая арифметика',
                'description' => 'Создайте простой калькулятор для сложения, вычитания, умножения и деления двух чисел.',
                'input_example' => '5, 3',
                'output_example' => '8, 2, 15, 1.67',
                'note' => 'Используйте float для деления.',
                'level_id' => $expertLevelId,
                'language_id' => $javascriptId,
                'active' => true, // Активируем первое задание
                'created_at' => Carbon::today(),
            ],
            [
                'title' => 'Реверс строки',
                'description' => 'Напишите функцию для реверса строки.',
                'input_example' => 'hello',
                'output_example' => 'olleh',
                'note' => 'Учтите крайние случаи, такие как null ввод.',
                'level_id' => $beginnerLevelId,
                'language_id' => $pythonId,
                'active' => false,
                'created_at' => Carbon::tomorrow(),
            ],
            [
                'title' => 'Сортировка массива',
                'description' => 'Отсортируйте массив целых чисел в порядке возрастания.',
                'input_example' => '[3, 1, 2]',
                'output_example' => '[1, 2, 3]',
                'note' => 'Используйте любой алгоритм сортировки.',
                'level_id' => $intermediateLevelId,
                'language_id' => $javaId,
                'active' => false,
                'created_at' => Carbon::tomorrow()->addDay(),
            ]
        ];

        // Заполнение таблицы заданиями
        foreach ($challenges as $challenge) {
            Daily::create($challenge);
        }
    }
}
