<?php

namespace App\Models;

use App\Models\Rubric;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

public function rubrics()
{
    return $this->hasMany(Rubric::class);
}

    protected $fillable = [
        'name',
        'url',
        'description',
    ];
}
