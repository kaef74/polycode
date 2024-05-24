<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Language;
use App\Models\Level;
use Inertia\Inertia;

class CourseController extends Controller
{
    public function index()
    {
        $courses = Course::with('level', 'languages')->get();
        $levels = Level::all();
        $languages = Language::all();

        return Inertia::render('CourseCatalog', [
            'courses' => $courses,
            'levels' => $levels,
            'languages' => $languages
        ]);
    }

    public function show($id)
    {
        $course = Course::with(['tasks', 'languages', 'level'])
            ->withCount('users')
            ->findOrFail($id);

        $isEnrolled = auth()->user()->courses->contains($id);

        return Inertia::render('CourseView', [
            'course' => $course,
            'isEnrolled' => $isEnrolled,
        ]);
    }
}
