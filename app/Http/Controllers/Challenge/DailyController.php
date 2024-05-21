<?php

namespace App\Http\Controllers\Challenge;

use App\Http\Controllers\Controller;
use App\Models\Challenge\Daily;
use App\Models\Language;
use App\Models\Level;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;

class DailyController extends Controller
{
    public function index()
    {
        $data = self::getDailyChallengeData();
        return Inertia::render('DailyChallenge', $data);
    }

    public static function getDailyChallengeData()
    {
        $now = Carbon::now('Europe/Moscow');
        $endOfDay = $now->copy()->endOfDay();
        $timeLeft = $endOfDay->diffForHumans($now, true);

        $daily = Daily::where('active', true)->with(['language', 'level'])->first();
        $serverTime = $now->toDateTimeString();

        return [
            'daily' => $daily ? $daily->toArray() : null,
            'timeLeft' => $timeLeft,
            'serverTime' => $serverTime
        ];
    }

    public function create()
    {
        $languages = Language::all();
        $levels = Level::all();
        return Inertia::render('DailyChallenge/Create', [
            'languages' => $languages,
            'levels' => $levels
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'level_id' => 'required|exists:levels,id',
            'input_example' => 'required|string',
            'output_example' => 'required|string',
            'note' => 'required|string',
            'language_id' => 'required|exists:languages,id',
            'active' => 'boolean'
        ]);

        $daily = Daily::create($validated);

        if ($validated['active']) {
            Daily::where('id', '!=', $daily->id)->update(['active' => false]);
        }

        return redirect()->route('dailies.index')->with('message', 'Задание успешно создано!');
    }

    public function show(Daily $daily)
    {
        return Inertia::render('DailyChallenge/Show', [
            'daily' => $daily
        ]);
    }

    public function edit(Daily $daily)
    {
        $languages = Language::all();
        $levels = Level::all();
        return Inertia::render('DailyChallenge/Edit', [
            'daily' => $daily,
            'languages' => $languages,
            'levels' => $levels
        ]);
    }

    public function update(Request $request, Daily $daily)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'level_id' => 'required|exists:levels,id',
            'input_example' => 'required|string',
            'output_example' => 'required|string',
            'note' => 'required|string',
            'language_id' => 'required|exists:languages,id',
            'active' => 'boolean'
        ]);

        $daily->update($validated);

        if ($validated['active']) {
            Daily::where('id', '!=', $daily->id)->update(['active' => false]);
        }

        return redirect()->route('dailies.index')->with('message', 'Задание успешно обновлено!');
    }

    public function destroy(Daily $daily)
    {
        $daily->delete();
        return redirect()->route('dailies.index')->with('message', 'Задание успешно удалено!');
    }
}
