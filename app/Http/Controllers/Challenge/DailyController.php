<?php

namespace App\Http\Controllers\Challenge;

use App\Http\Controllers\Controller;
use App\Models\Challenge\Daily;
use App\Models\Challenge\Language; // Подключаем модель языков, если она в другом namespace
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;

class DailyController extends Controller
{
    public function index()
    {
        $now = Carbon::now();
        $endOfDay = $now->copy()->endOfDay();
        $timeLeft = $endOfDay->diffForHumans($now, true); // Используем diffForHumans для красивого формата

        $daily = Daily::where('active', true)->with('language')->first();

        return Inertia::render('DailyChallenge', [
            'daily' => $daily ? $daily->toArray() : null,
            'timeLeft' => $timeLeft
        ]);
    }

    public function create()
    {
        // Получаем список языков для выбора в форме
        $languages = Language::all();
        return Inertia::render('DailyChallenge/Create', ['languages' => $languages]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'level' => 'required|string',
            'input_example' => 'nullable|string',
            'output_example' => 'nullable|string',
            'note' => 'nullable|string',
            'language_id' => 'required|exists:languages,id', // Убедимся, что id языка существует
            'active' => 'boolean'
        ]);

        $daily = Daily::create($validated);

        // Управление активным заданием
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
        return Inertia::render('DailyChallenge/Edit', [
            'daily' => $daily,
            'languages' => $languages
        ]);
    }

    public function update(Request $request, Daily $daily)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'level' => 'required|string',
            'input_example' => 'nullable|string',
            'output_example' => 'nullable|string',
            'note' => 'nullable|string',
            'language_id' => 'required|exists:languages,id',
            'active' => 'boolean'
        ]);

        $daily->update($validated);

        // Управление активным заданием
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
