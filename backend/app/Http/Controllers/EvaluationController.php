<?php

namespace App\Http\Controllers;

use App\Models\Evaluation;
use Illuminate\Http\Request;

class EvaluationController extends Controller
{

    public function index()
    {
        return Evaluation::all();
    }


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
        $evaluation->title = $request->title;
        $evaluation->description = $request->description;
        $evaluation->evaluation_text = $request->evaluation_text;
        $evaluation->negative = $request->negative;
        $evaluation->regular = $request->regular;
        $evaluation->suficient = $request->suficient;
        $evaluation->good = $request->good;
        $evaluation->excelent = $request->excelent;

        $evaluation->save();
        return $evaluation;
    }

    public function show(Evaluation $evaluation)
    {
        $answer = $evaluation->answer;

        return response()->json([
            'evaluation' => $evaluation,
        ]);
    }


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

        $evaluation->title = $request->title;
        $evaluation->description = $request->description;
        $evaluation->evaluation_text = $request->evaluation_text;
        $evaluation->negative = $request->negative;
        $evaluation->regular = $request->regular;
        $evaluation->suficient = $request->suficient;
        $evaluation->good = $request->good;
        $evaluation->excelent = $request->excelent;

        $evaluation->update();
        return response()->json('Evaluación modificada', 200);
    }


    public function destroy($id)
    {
        $evaluation = Evaluation::find($id);
        if(is_null($evaluation)){
            return response()->json('Evaluación no encontrada', 404);
        }
        $evaluation->delete();
        return response()->json('Evaluación eliminada!', 200);
    }
}
