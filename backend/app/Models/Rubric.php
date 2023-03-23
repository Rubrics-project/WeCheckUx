<?php

namespace App\Models;

use App\Models\Evaluation;
use App\Models\User;
use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rubric extends Model
{
    use HasFactory;

    public function evaluations()
    {
        return $this->hasMany(Evaluation::class);
    }
    public function user()
    {
     return $this->belongsTo(User::class, 'user_id');
    }

    public function project()
    {
        return $this->belongsTo(Project::class, 'project_id');
    }

    protected $fillable = [
        'title',
        'description'
    ];
}
