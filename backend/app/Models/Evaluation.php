<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Evaluation extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'evaluation_text',
        'negative',
        'regular',
        'suficient',
        'good',
        'excelent',
    ];
}
