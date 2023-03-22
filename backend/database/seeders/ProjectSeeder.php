<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Project::factory()->count(10)->create();

        Project::insert([
            [
              'name' => 'Página de inicio de la web UOC.edu',
              'url' => 'www.uoc.edu',
              'description' => 'La página de entrada de la Universidad Oberta de Catalunya es la puerta de acceso para sus estudiantes y el portal de difusión y publicidad de la universidad y sitio de acceso a los futuros estudiantes para obtener información.',
              'created_at' => now(),
              'updated_at' => now(),
            ],
            [
                'name' => 'Página de inicio de la web UOC.edu',
                'url' => 'www.uoc.edu',
                'description' => 'La página de entrada de la Universidad Oberta de Catalunya es la puerta de acceso para sus estudiantes y el portal de difusión y publicidad de la universidad y sitio de acceso a los futuros estudiantes para obtener información.',
                'created_at' => now(),
                'updated_at' => now(),
              ],
              [
                'name' => 'Aula antigua de la Universitat Oberta de Catalunya',
                'url' => '#Acceso restringido a miembros de la universidad',
                'description' => 'El aula antigua es el espacio dónde se imparte la docencia y se despliega el proceso de aprendizaje de la universidad online.',
                'created_at' => now(),
                'updated_at' => now(),
              ],
            
          ]);
    }
}
