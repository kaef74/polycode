<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Schedule;


Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote')->hourly();

Schedule::command('challenge:activate-daily')->dailyAt('00:00');

Schedule::command('challenge:activate-weekly')->weeklyOn(1, '00:00');

