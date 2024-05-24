<?php

namespace App\Models\Challenge;

use App\Models\Level;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Weekly extends Model
{
    use HasFactory;

    protected $fillable = [
        'description',
        'active',
        'level_id'
    ];

    public function level()
    {
        return $this->belongsTo(Level::class);
    }
}
