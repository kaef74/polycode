<?php

namespace Database\Seeders;

use App\Models\Language;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LanguageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $languages = [
            ['name' => 'Python'],
            ['name' => 'JavaScript'],
            ['name' => 'Java'],
            // Добавьте другие языки по желанию
        ];

        foreach ($languages as $language) {
            Language::create($language);
        }
    }
}
