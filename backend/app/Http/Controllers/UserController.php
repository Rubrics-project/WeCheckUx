<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index()
    {
        return User::all();
    }

    public function register(Request $request){

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'surname'=>'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:8|confirmed',
            // 'confirmed' => 'required|string|min:8',
        ]);

        if ($validator->fails()) {
            return response()->json([
                "status"=> 0,
                "msg"=>"¡Completa los campos correctamente!"
            ], 404);
        }

        if (User::where('email', $request->email)->exists()) {
            return response()->json([
                "status"=> 0,
                "msg"=>"¡Este email ya existe!"
            ], 404);
        }

        if(!$validator->fails() && !User::where('email', $request->email)->exists()){
            $user = new User;
            $user->name =  $request->name;
            $user->surname =  $request->surname;
            $user->email = $request->email;
            $user->password = Hash::make($request->password);
            // $user->createToken("auth_token")->plainTextToken;

            $user->save();
            return response()->json([
                "status"=> 1,
                "msg"=>"Registro exitoso!"]);
        }

    }

    public function login(Request $request){
         $request->validate([
            'email'=>'required|string|email|max:255',
            'password'=>'required|string|min:8'
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
                    "msg"=>"¡Usuario y/o Contraseña incorrectos!"
                ], 404);
            }
        }
        else{
            return response()->json([
                "status"=> 0,
                "msg"=>"¡Usuario y/o Contraseña incorrectos!"
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
            'surname'=>'required',
            'email'=>'required',
            'password'=>'required',
        ]);

       $user->name =  $request->name;
       $user->surname =  $request->surname;
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
        return response()->json("Usuario Eliminado", 200);
    }







}
