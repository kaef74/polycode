<?php

namespace App\Console\Commands;

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Challenge\Daily;
use Carbon\Carbon;

class ActivateDailyChallenge extends Command
{
    protected $signature = 'challenge:activate';
    protected $description = 'Activate the next daily challenge based on ID.';

    public function handle()
    {
        // Деактивируем все текущие задания
        Daily::query()->update(['active' => false]);

        // Находим первое неактивное задание по ID
        $nextChallenge = Daily::where('active', false)->orderBy('id')->first();

        if ($nextChallenge) {
            $nextChallenge->active = true;
            $nextChallenge->save();
            $this->info('Activated daily challenge with ID: ' . $nextChallenge->id);
        } else {
            $this->info('No more challenges to activate.');
        }
    }
}
