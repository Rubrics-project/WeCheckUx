<?php

namespace App\Models;

use App\Models\Evaluation;
// use App\Models\Answer;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Evaluation extends Model
{
    use HasFactory;

    public function answer()
    {
        return $this->hasOne(Answer::class, 'evaluation_id');
    }

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
