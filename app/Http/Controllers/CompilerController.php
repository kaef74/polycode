<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class CompilerController extends Controller
{
    public function index()
    {
        return Inertia::render('Compiler');
    }
}
