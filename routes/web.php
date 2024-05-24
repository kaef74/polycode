<?php

use App\Http\Controllers\Challenge\DailyController;
use App\Http\Controllers\Challenge\WeeklyController;
use App\Http\Controllers\CompilerController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\EducationController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('compiler', [CompilerController::class, 'index'])->name('compiler');


Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('/education', [EducationController::class, 'index'])->name('education');

    Route::get('/profile', [ProfileController::class, 'index'])->name('profile');

    Route::get('/daily-challenge', [DailyController::class, 'index'])->name('daily-challenge');

    Route::get('/weekly-challenge', [WeeklyController::class, 'index'])->name('weekly-challenge');

    Route::get('/courses', [CourseController::class, 'index'])->name('courses.index');

    Route::get('/courses/{id}', [CourseController::class, 'show'])->name('courses.show');


});


require __DIR__.'/auth.php';
