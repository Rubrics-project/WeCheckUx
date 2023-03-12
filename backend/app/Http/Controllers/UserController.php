<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return User::all();
    }

    public function register(Request $request){

    }

    public function login(Request $request){

    }

    public function useProfile(){

    }

    public function logout(){

    }







}
