<?php

namespace Database\Seeders;

use App\Models\Challenge\Weekly;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class WeeklyChallengeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Создаем новые задания
        Weekly::create([
            'description' => "Разработать полнофункциональную платформу для проведения виртуальных мероприятий, поддерживающую видеотрансляции, чаты, Q&A сессии, виртуальные выставочные залы и интеграцию с платежными системами. Платформа должна поддерживать минимум 10,000 пользователей онлайн, обеспечивать высокую безопасность данных и предоставлять аналитические отчеты в реальном времени. Требуется использование Docker, Kubernetes, WebRTC, OAuth 2.0, Elasticsearch.",
            'level_id' => 2,
            'active' => true,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);

        Weekly::create([
            'description' => "Создать систему для обработки и анализа больших данных в реальном времени, которая собирает данные с IoT устройств. Система должна обрабатывать более 1 миллиона сообщений в секунду и интегрироваться с AI для прогнозирования тенденций и аномалий. Требуется использование Apache Kafka, Apache Spark, машинное обучение.",
            'level_id' => 4,
            'active' => false,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
    }
}
