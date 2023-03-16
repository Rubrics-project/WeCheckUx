<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use Illuminate\Http\Request;

class AnswerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Answer::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'evaluation_value'=>'required',
        ]);

        $answers = new Answer();
        $answers->evaluation_value = $request->evaluation_value;


        $answers->save();
        return $answers;
    }

    /**
     * Display the specified resource.
     */
    public function show(Answer $answer)
    {
        return $answer;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Answer $answer)
    {
        $request->validate([
            'evaluation_value'=>'required',
        ]);

        $answer->evaluation_value = $request->evaluation_value;
        $answer->update();
        return $answer;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $answer = Answer::find('id');

        if(is_null($answer)){
            return response()->json('Respuesta no encontrada');
        }
        $answer->delete();
        return response()->noContent();
    }
}
