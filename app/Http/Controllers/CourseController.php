<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Inertia\Inertia;

class CourseController extends Controller
{
    public function index()
    {
        $courses = Course::with('level')->get();
        return Inertia::render('CourseCatalog', [
            'courses' => $courses
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
