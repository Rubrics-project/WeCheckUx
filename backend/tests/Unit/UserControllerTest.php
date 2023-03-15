<?php

namespace Tests\Unit;

use App\Http\Controllers\UserController;
use PHPUnit\Framework\TestCase;

class UserControllerTest extends TestCase
{
    public $user = null;
    public function setUp(): void
    {
        $this->user = new UserController();
    }
    public function test_register($request)
    {
      
        $result = $this->user->register($request);
        $this->assertEquals(" ",'name');
        $this->assertTrue(true);
    }
}