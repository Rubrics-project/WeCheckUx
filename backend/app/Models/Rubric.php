<?php

namespace App\Models;

use App\Models\Evaluation;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rubric extends Model
{
    use HasFactory;

    public function evaluations()
    {
        return $this->hasMany(Evaluation::class);
    }

    protected $fillable = [
        'title',
        'description'
    ];
}
