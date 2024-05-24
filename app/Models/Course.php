<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $fillable = [
        'title_course',
        'description_course',
        'time_spent'
    ];

    public function tasks()
    {
        return $this->belongsToMany(Task::class, 'task_course');
    }

    public function languages()
    {
        return $this->belongsToMany(Language::class, 'course_language');
    }

    public function level()
    {
        return $this->belongsTo(Level::class);
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_course');
    }

    public function getEnrollmentCountAttribute()
    {
        return $this->users()->count();
    }
}
