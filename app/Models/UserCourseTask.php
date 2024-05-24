<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserCourseTask extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'task_course_id',
        'status_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function taskCourse()
    {
        return $this->belongsTo(TaskCourse::class);
    }

    public function status()
    {
        return $this->belongsTo(Status::class);
    }
}
