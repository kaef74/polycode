<?php

namespace App\Http\Controllers\Course;

use App\Http\Controllers\Controller;
use App\Models\Course\View;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ViewController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('CourseView');
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
    public function show(View $view)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(View $view)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, View $view)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(View $view)
    {
        //
    }
}
