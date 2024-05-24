<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Task;
use App\Models\Course;

class TaskSeeder extends Seeder
{
    public function run()
    {
        $tasks = [
            [
                'title_task' => 'Task 1',
                'task' => 'Напиши 1',
                'input_example' => '1',
                'output_example' => '1',
                'note_task' => 'Note: Ensure to handle edge cases.'
            ],
            [
                'title_task' => 'Task 2',
                'task' => 'Напиши 2',
                'input_example' => '2',
                'output_example' => '2',
                'note_task' => 'Note: Optimize for large numbers.'
            ],
            [
                'title_task' => 'Task 3',
                'task' => 'Напиши 3',
                'input_example' => '3',
                'output_example' => '3',
                'note_task' => 'Note: Optimize for large numbers.'
            ],
            [
                'title_task' => 'Task 4',
                'task' => 'Напиши 4',
                'input_example' => '4',
                'output_example' => '4',
                'note_task' => 'Note: Optimize for large numbers.'
            ],
            [
                'title_task' => 'Task 5',
                'task' => 'Напиши 5',
                'input_example' => '5',
                'output_example' => '5',
                'note_task' => 'Note: Optimize for large numbers.'
            ],
            [
                'title_task' => 'Task 6',
                'task' => 'Напиши 6',
                'input_example' => '6',
                'output_example' => '6',
                'note_task' => 'Note: Optimize for large numbers.'
            ],
            [
                'title_task' => 'Task 7',
                'task' => 'Напиши 7',
                'input_example' => '7',
                'output_example' => '7',
                'note_task' => 'Note: Optimize for large numbers.'
            ],
            [
                'title_task' => 'Task 8',
                'task' => 'Напиши 8',
                'input_example' => '8',
                'output_example' => '8',
                'note_task' => 'Note: Optimize for large numbers.'
            ],
            [
                'title_task' => 'Task 9',
                'task' => 'Напиши 9',
                'input_example' => '9',
                'output_example' => '9',
                'note_task' => 'Note: Optimize for large numbers.'
            ],
            [
                'title_task' => 'Task 10',
                'task' => 'Напиши 10',
                'input_example' => '10',
                'output_example' => '10',
                'note_task' => 'Note: Optimize for large numbers.'
            ],
            [
                'title_task' => 'Task 11',
                'task' => 'Напиши 11',
                'input_example' => '11',
                'output_example' => '11',
                'note_task' => 'Note: Ensure to handle edge cases.'
            ],
            [
                'title_task' => 'Task 12',
                'task' => 'Напиши 12',
                'input_example' => '12',
                'output_example' => '12',
                'note_task' => 'Note: Optimize for large numbers.'
            ],
            [
                'title_task' => 'Task 13',
                'task' => 'Напиши 13',
                'input_example' => '13',
                'output_example' => '13',
                'note_task' => 'Note: Optimize for large numbers.'
            ],
            [
                'title_task' => 'Task 14',
                'task' => 'Напиши 14',
                'input_example' => '14',
                'output_example' => '14',
                'note_task' => 'Note: Optimize for large numbers.'
            ],
            [
                'title_task' => 'Task 15',
                'task' => 'Напиши 15',
                'input_example' => '15',
                'output_example' => '15',
                'note_task' => 'Note: Optimize for large numbers.'
            ],
            [
                'title_task' => 'Task 16',
                'task' => 'Напиши 16',
                'input_example' => '16',
                'output_example' => '16',
                'note_task' => 'Note: Optimize for large numbers.'
            ],
            [
                'title_task' => 'Task 17',
                'task' => 'Напиши 17',
                'input_example' => '17',
                'output_example' => '17',
                'note_task' => 'Note: Optimize for large numbers.'
            ],
            [
                'title_task' => 'Task 18',
                'task' => 'Напиши 18',
                'input_example' => '18',
                'output_example' => '18',
                'note_task' => 'Note: Optimize for large numbers.'
            ],
            [
                'title_task' => 'Task 19',
                'task' => 'Напиши 19',
                'input_example' => '19',
                'output_example' => '19',
                'note_task' => 'Note: Optimize for large numbers.'
            ],
            [
                'title_task' => 'Task 20',
                'task' => 'Напиши 20',
                'input_example' => '20',
                'output_example' => '20',
                'note_task' => 'Note: Optimize for large numbers.'
            ],
        ];

        foreach ($tasks as $taskData) {
            Task::create($taskData);
        }

        // Assign tasks to random courses
        $tasks = Task::all();
        $courses = Course::all();

        foreach ($courses as $course) {
            $course->tasks()->attach($tasks->random(5)); // Assign 5 random tasks to each course
        }
    }
}
