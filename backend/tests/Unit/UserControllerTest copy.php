<?php

namespace Tests\Unit;

use App\Http\Controllers\UserController;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PHPUnit\Framework\TestCase;

class UserControllerTest extends TestCase
{
    use RefreshDatabase;
    public $user = null;
    public function setUp(): void
    {
        $this->user = new UserController();
    }


    public function test_register_name_emtpy()
    {

        $result = $this->user->register();
        $this->assertnotEquals(" ", 'name');
        $this->assertTrue(true);
    }
    public function test_register_email_exist($request)
    {

        $result = $this->user->register($request);
        $this->assertnotEquals("raquelcaraballospain@gmail.com", 'email');
        $this->assertTrue(true);
    }
}