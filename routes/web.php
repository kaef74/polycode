<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/profile', function () {
    return Inertia::render('Profile');
})->middleware(['auth', 'verified'])->name('profile');

Route::get('/education', function () {
    return Inertia::render('Education');
})->middleware(['auth', 'verified'])->name('education');

Route::get('/compiler', function () {
    return Inertia::render('Compiler');
})->middleware(['auth', 'verified'])->name('compiler');

Route::get('/daily-challenge', function () {
    return Inertia::render('DailyChallenge');
})->middleware(['auth', 'verified'])->name('daily-challenge');

Route::get('/weekly-challenge', function () {
    return Inertia::render('WeeklyChallenge');
})->middleware(['auth', 'verified'])->name('weekly-challenge');

Route::get('/courses-catalog', function () {
    return Inertia::render('CourseCatalog');
})->middleware(['auth', 'verified'])->name('weekly-challenge');

Route::get('/course/{id}', function () {
    return Inertia::render('CourseView');
})->middleware(['auth', 'verified'])->name('course-id');

require __DIR__.'/auth.php';
