<?php

namespace App\Http\Controllers;

use App\Models\Evaluation;
use Illuminate\Http\Request;

class EvaluationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Evaluation::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title'=>'required',
            'description'=>'required',
            'evaluation_text'=>'required',
            'negative'=>'required',
            'regular'=>'required',
            'suficient'=>'required',
            'good'=>'required',
            'excelent'=>'required',
        ]);

        $evaluation = new Evaluation();
        $evaluation->name = $request->name;
        $evaluation->url = $request->url;
        $evaluation->description = $request->description;

        $evaluation->save();
        return $evaluation;
    }

    /**
     * Display the specified resource.
     */
    public function show(Evaluation $evaluation)
    {
        return $evaluation;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Evaluation $evaluation)
    {
        $request->validate([
            'title'=>'required',
            'description'=>'required',
            'evaluation_text'=>'required',
            'negative'=>'required',
            'regular'=>'required',
            'suficient'=>'required',
            'good'=>'required',
            'excelent'=>'required',
        ]);

        $evaluation->name = $request->name;
        $evaluation->url = $request->url;
        $evaluation->description = $request->description;

        $evaluation->update();
        return $evaluation;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $evaluation = Evaluation::find($id);
        if(is_null($evaluation)){
            return response()->json('Evaluación no encontrada');
        }
        $evaluation->delete();
        return response()->noContent();
    }
}
