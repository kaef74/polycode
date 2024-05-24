<?php

namespace App\Http\Controllers;

use App\Models\Language;
use App\Models\Level;
use Illuminate\Http\Request;

class FilterController extends Controller
{
    public function getFilters()
    {
        $levels = Level::all();
        $languages = Language::all();

        return response()->json([
            'levels' => $levels,
            'languages' => $languages,
        ]);
    }
}
