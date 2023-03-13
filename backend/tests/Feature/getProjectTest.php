<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class getProject extends TestCase
{
    public function test_get_project_by_id()
    {
        //crear un proyecto en el sistema (base de datos)
        factory(Project::class)->create([
        'id' => 1,
    ]);

        //Llamar a la api para pedir ese proyecto
        $respuesta = $this->get('/api/projects/1');

        //Comprobar que el proyecto se nos devuelve
        $respuesta->assertJsonFragment([
            'id' => 1,
            'titulo' => 'Mi descripción',
            'url_video' => 'http://youtube.com/asdfasd',
        ]);
       
    }
}
