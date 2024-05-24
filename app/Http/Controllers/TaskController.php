<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Models\Course;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TaskController extends Controller
{
    public function show($id)
    {
        $course = Course::with('tasks')->findOrFail($id);
        return Inertia::render('PassingCourse', [
            'course' => $course
        ]);
    }

    public function markAsCompleted(Request $request, $taskId)
    {
        $user = $request->user();
        $task = Task::findOrFail($taskId);

        // Mark the task as completed (add logic to handle this)
        // e.g., $user->completedTasks()->attach($taskId);

        return redirect()->back()->with('success', 'Task marked as completed.');
    }
}
