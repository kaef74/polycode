<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Challenge\Daily;
use Illuminate\Support\Facades\Storage;

class ActivateDailyChallenge extends Command
{
    protected $signature = 'challenge:activate';
    protected $description = 'Activate the next daily challenge based on ID.';
    protected $stateFilePath = 'current_challenge_state.txt';

    public function handle()
    {
        // Деактивируем все текущие задания
        Daily::query()->update(['active' => false]);

        // Получаем текущее состояние
        $currentChallengeId = null;
        if (Storage::exists($this->stateFilePath)) {
            $currentChallengeId = (int)Storage::get($this->stateFilePath);
        }

        // Находим следующее задание по ID
        if ($currentChallengeId) {
            $nextChallenge = Daily::where('id', '>', $currentChallengeId)->orderBy('id')->first();
        } else {
            $nextChallenge = Daily::orderBy('id')->first();
        }

        // Если следующее задание не найдено, оставляем состояние как есть и выходим
        if (!$nextChallenge) {
            $this->info('No more challenges to activate.');
            return;
        }

        // Активируем следующее задание
        $nextChallenge->active = true;
        $nextChallenge->save();

        // Обновляем состояние
        Storage::put($this->stateFilePath, $nextChallenge->id);

        $this->info('Activated daily challenge with ID: ' . $nextChallenge->id);
    }
}
