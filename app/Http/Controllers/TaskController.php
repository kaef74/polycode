<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Models\Course;
use App\Models\UserCourseTask;
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

        // Помечаем задание как завершенное
        UserCourseTask::updateOrCreate(
            [
                'user_id' => $user->id,
                'task_id' => $taskId,
            ],
            [
                'is_completed' => true
            ]
        );

        return response()->json(['success' => 'Задание выполнено.']);
    }
}
