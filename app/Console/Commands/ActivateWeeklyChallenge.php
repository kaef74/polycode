<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Challenge\Weekly;
use Illuminate\Support\Facades\Storage;

class ActivateWeeklyChallenge extends Command
{
    protected $signature = 'challenge:activate-weekly';
    protected $description = 'Activate the next weekly challenge based on ID.';
    protected $stateFilePath = 'current_weekly_challenge_state.txt';

    public function handle()
    {
        // Деактивируем все текущие задания
        Weekly::query()->update(['active' => false]);

        // Получаем текущее состояние
        $currentChallengeId = null;
        if (Storage::exists($this->stateFilePath)) {
            $currentChallengeId = (int)Storage::get($this->stateFilePath);
        }

        // Находим следующее задание по ID
        if ($currentChallengeId) {
            $nextChallenge = Weekly::where('id', '>', $currentChallengeId)->orderBy('id')->first();
        } else {
            $nextChallenge = Weekly::orderBy('id')->first();
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

        $this->info('Activated weekly challenge with ID: ' . $nextChallenge->id);
    }
}
