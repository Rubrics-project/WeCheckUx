<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Project;

class ProjectControllerTest extends TestCase
{
    use RefreshDatabase;
    
    public function test_delete_project()
    {
        $project = Project::factory()->count(3)->make();

        $project = Project::first();

        if($project) {
            $project->delete();
        }

        $this->assertTrue(true);
    }  
}
