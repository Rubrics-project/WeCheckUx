<?php

namespace Tests\Feature;

// use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Rubric;
// use Laravel\Sanctum\Sanctum;


class RubricControllerTest extends TestCase
{
    // use RefreshDatabase;
    public function test_route_rubrics()
    {                
         $this->get(route('rubrics.index'))->assertStatus(200);
            
    }

    public function test_create_rubric()
    
    {
        $this->withExceptionHandling();
        
            Rubric::factory()->create([
                'title' => 'Validar colores',
                'description' => 'Explique cuales son los colores acertados a la web',
                'user_id' => 1,
                'project_id' => 23,
                'rubrics_user_id_foreign'=>1,
                'rubrics_project_id_foreign'=>23,
            ]);
       
        // $this->assertAuthenticated();
        $response = $this->get('/');

        $response->assertOk();
    }
     //  ->assertJsonFragment([
            //      'title' => $rubrics[0]->title
            //  ]);
            // ->assertJsonFragment([
            //      'title' => $rubrics[1]->title
            //  ]);
    // Rubric::factory()->create();
        // $this->get('/api/rubrics')->dump();
        //  dd($rubrics);
        // dd($rubrics->count());
        // $rubrics = Rubric::factory(2)->create();
        // var_dump($rubrics);
   
}