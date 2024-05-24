<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Challenge\DailyController;
use App\Http\Controllers\Challenge\WeeklyController;
use App\Models\Course;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EducationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $dailyData = DailyController::getDailyChallengeData();
        $weeklyData = WeeklyController::getWeeklyChallengeData();
        $randomCourses = Course::inRandomOrder()->limit(3)->with('level')->get();

        return Inertia::render('Education', array_merge($dailyData, $weeklyData, [
            'randomCourses' => $randomCourses,
        ]));
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
    public function show(Education $education)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Education $education)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Education $education)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Education $education)
    {
        //
    }
}
