<?php

namespace Database\Seeders;

use App\Models\Language;
use Illuminate\Database\Seeder;
use App\Models\Challenge\Daily;
use Carbon\Carbon;

class DailyChallengesSeeder extends Seeder
{
    public function run()
    {
        $javascriptId = Language::where('name', 'JavaScript')->first()->id;
        $pythonId = Language::where('name', 'Python')->first()->id;
        $javaId = Language::where('name', 'Java')->first()->id;

        $challenges = [
            [
                'title' => 'Basic Arithmetic',
                'description' => 'Create a simple calculator to add, subtract, multiply, and divide two numbers.',
                'input_example' => '5, 3',
                'output_example' => '8, 2, 15, 1.67',
                'note' => 'Use float for division.',
                'level' => 'Beginner',
                'language_id' => $javascriptId,
                'active' => true, // Activate the first challenge
                'created_at' => Carbon::today(),
            ],
            [
                'title' => 'String Reversal',
                'description' => 'Write a function to reverse a string.',
                'input_example' => 'hello',
                'output_example' => 'olleh',
                'note' => 'Consider edge cases such as null input.',
                'level' => 'Beginner',
                'language_id' => $pythonId,
                'active' => false,
                'created_at' => Carbon::tomorrow(),
            ],
            [
                'title' => 'Array Sorting',
                'description' => 'Sort an array of integers in ascending order.',
                'input_example' => '[3, 1, 2]',
                'output_example' => '[1, 2, 3]',
                'note' => 'Use any sorting algorithm.',
                'level' => 'Intermediate',
                'language_id' => $javaId,
                'active' => false,
                'created_at' => Carbon::tomorrow()->addDay(),
            ]
        ];

        foreach ($challenges as $challenge) {
            Daily::create($challenge);
        }
    }
}
