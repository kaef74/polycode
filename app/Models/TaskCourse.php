<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TaskCourse extends Model
{
    use HasFactory;

    protected $fillable = [
        'task_id',
        'course_id'
    ];

    public function task()
    {
        return $this->belongsTo(Task::class);
    }

    public function course()
    {
        return $this->belongsTo(Course::class);
    }
}
