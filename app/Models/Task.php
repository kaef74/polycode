<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $fillable = [
        'title_task',
        'task',
        'input_example',
        'output_example',
        'note_task'
    ];

    public function courses()
    {
        return $this->belongsToMany(Course::class, 'task_course');
    }

    public function tests()
    {
        return $this->belongsToMany(Test::class, 'task_test');
    }
}
