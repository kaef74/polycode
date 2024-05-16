<?php

namespace App\Http\Controllers\Challenge;

use App\Http\Controllers\Controller;
use App\Models\Challenge\Weekly;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WeeklyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('WeeklyChallenge');
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
