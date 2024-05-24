<?php

namespace App\Http\Controllers\Challenge;

use App\Http\Controllers\Controller;
use App\Models\Challenge\Weekly;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WeeklyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = self::getWeeklyChallengeData();
        return Inertia::render('WeeklyChallenge', $data);
    }

    public static function getWeeklyChallengeData()
    {
        $now = Carbon::now('Europe/Moscow');
        $endOfWeek = $now->copy()->next(Carbon::MONDAY)->startOfDay();
        $timeLeft = $endOfWeek->diffForHumans($now, true);

        $weekly = Weekly::where('active', true)->with(['level'])->first();
        $serverTime = $now->toDateTimeString();

        return [
            'weekly' => $weekly ? $weekly->toArray() : null,
            'timeLeft' => $timeLeft,
            'serverTime' => $serverTime
        ];
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Weekly $weekly)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Weekly $weekly)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Weekly $weekly)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Weekly $weekly)
    {
        //
    }
}
