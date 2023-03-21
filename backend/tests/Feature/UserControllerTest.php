<?php

namespace Tests\Feature;
use Laravel\Sanctum\Sanctum;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;

class UserControllerTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     */
    public function test_login_view_load()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }
    public function test_user_login_email_password(){

        $this->withExceptionHandling();
        Sanctum::actingAs(
            User::factory()->create([
                'name' => 'Raquel',
                'surname' => 'Caraballo',
                'email' => 'RaquelC@gmail.com',
                'password' => '12345678',
            ])
        );
        // $this->assertAuthenticated();
        $response = $this->get('/');

        $response->assertOk();
    }
    /**
     * A basic feature test example.
     */
    
    public function test_user_duplicate()
    {
        $user1 = User::factory()->create();
        ([
            'name' => 'Jose Pradas',
            'email' => 'JosePr@gmail.com'
        ]);
        $user2 = User::factory()->create();
        ([
            'name' => 'Luisa Lein',
            'email' => 'LuisaLein@gmail.com'
        ]);

        $this->assertTrue($user1->email != $user2->email);
    }
}