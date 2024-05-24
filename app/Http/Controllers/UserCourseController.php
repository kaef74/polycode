<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;

class UserCourseController extends Controller
{
    public function enroll(Request $request, $courseId)
    {
        $user = auth()->user();
        $course = Course::findOrFail($courseId);

        if (!$user->courses->contains($courseId)) {
            $user->courses()->attach($courseId);
            return redirect()->route('courses.show', $courseId)->with('success', 'Вы успешно записались на курс!');
        }

        return redirect()->route('courses.show', $courseId)->with('error', 'Вы уже записаны на этот курс.');
    }
}

