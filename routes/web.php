<?php

use App\Http\Controllers\Challenge\DailyController;
use App\Http\Controllers\Challenge\WeeklyController;
use App\Http\Controllers\CompilerController;
use App\Http\Controllers\Course\CatalogController;
use App\Http\Controllers\Course\ViewController;
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

    Route::get('/courses-catalog', [CatalogController::class, 'index'])->name('courses-catalog');

    Route::get('/course/{id}', [ViewController::class, 'index'])->name('course-id');


});


require __DIR__.'/auth.php';
