<?php

namespace App\Http\Controllers;

use App\Models\Proyect;
use Illuminate\Http\Request;

class ProyectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Proyect::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name'=>'required',
            'url'=>'required',
            'description'=>'required',
        ]);

        $proyect = new Proyect;
        $proyect->name = $request->name;
        $proyect->url = $request->url;
        $proyect->description = $request->description;

        $proyect->save();
        return $proyect;
    }

    /**
     * Display the specified resource.
     */
    public function show(Proyect $proyect)
    {
        return $proyect;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Proyect $proyect)
    {
        $request->validate([
            'name'=>'required',
            'url'=>'required',
            'description'=>'required',
        ]);

        $proyect->name = $request->name;
        $proyect->url = $request->url;
        $proyect->description = $request->description;

        $proyect->update();
        return $proyect;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $proyect = Proyect::find($id);
        if(is_null($proyect)){
            return response()->json('Proyecto no encontrado', 404);
        }
        $proyect->delete();
        return response()->noContent();
    }
}
