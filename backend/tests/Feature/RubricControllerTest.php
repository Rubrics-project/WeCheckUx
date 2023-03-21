<?php

namespace Tests\Feature;

// use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Rubric;
use Illuminate\Foundation\Testing\RefreshDatabase;
// use Laravel\Sanctum\Sanctum;


class RubricControllerTest extends TestCase
{
    
    use RefreshDatabase;
    public function test_route_rubrics()
    {                
         $this->get(route('rubrics.index'))->assertStatus(200);
            
    }
    
}