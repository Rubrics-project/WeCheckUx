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
        $request->validate([
            'name'=>'required',
            'email'=>'required|email|unique:users',
            'password'=>'required|confirmed'
        ]);

        $user = new User;
        $user->name =  $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);

        $user->save();

        return response()->json([
            "status"=> 1,
            "msg"=>"Registro exitoso!"

        ]);
    }

    public function login(Request $request){
         $request->validate([
            'email'=>'required|email',
            'password'=>'required'
        ]);

        $user = User::where("email", "=", $request->email)->first();

        if(isset($user->id)){
            if(Hash::check($request->password, $user->password)){
                //crear token
                $token = $user->createToken("auth_token")->plainTextToken;
                return response()->json([
                    "status"=> 1,
                    "msg"=>"Usuario logeado con exito!",
                    "access_token"=>$token
                ]);
            }
            else{
                return response()->json([
                    "status"=> 0,
                    "msg"=>"Password incorrecta!"
                ], 404);
            }
        }
        else{
            return response()->json([
                "status"=> 0,
                "msg"=>"User no encontrado!"
            ], 404);
        }

    }

    public function userProfile(){
        return response()->json([
            "status"=> 0,
            "msg"=>"Perfil del Usuario!",
            "data"=>auth()->user()
        ]);
    }

    public function logout(){
        auth()->user()->tokens()->delete();
        return response()->json([
            "status"=> 1,
            "msg"=>"Cierre de sesión!"
        ]);
    }

    public function show(User $user)
    {
        return $user;
    }

    public function update(Request $request, User $user)
    {
        $request->validate([
            'name'=>'required',
            'email'=>'required',
            'password'=>'required',
        ]);

       $user->name =  $request->name;
       $user->email = $request->email;
       $user->password = Hash::make($request->password);

       $user->update();
       return response()->json([
        "status"=> 1,
        "msg"=>"Usuario acrializado!"
    ]);
    }
    public function destroy($id)
    {
        $user = User::find($id);
        if(is_null($user)){
            return response()->json("Usuario no encontrado", 404);
        }
        $user->delete();
        return response()->json("Usuario Eliminado");
    }







}
