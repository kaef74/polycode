<?php

namespace App\Models\Challenge;

use App\Models\Language;
use Illuminate\Database\Eloquent\Model;

class Daily extends Model
{
    protected $fillable = [
        'title',
        'description',
        'level',
        'input_example',
        'output_example',
        'note',
        'language_id',
        'active'
    ];

    public function language()
    {
        return $this->belongsTo(Language::class);
    }
}
