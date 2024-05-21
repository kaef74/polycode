<?php

namespace App\Models\Challenge;

use App\Models\Language;
use App\Models\Level;
use Illuminate\Database\Eloquent\Model;

class Daily extends Model
{
    protected $fillable = [
        'title',
        'description',
        'input_example',
        'output_example',
        'note',
        'language_id',
        'active',
        'level_id'
    ];

    public function language()
    {
        return $this->belongsTo(Language::class);
    }

    public function level()
    {
        return $this->belongsTo(Level::class);
    }
}
