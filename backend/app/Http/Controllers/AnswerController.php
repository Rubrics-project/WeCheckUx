<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use Illuminate\Http\Request;

class AnswerController extends Controller
{
    public function index()
    {
        return Answer::all();
    }

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

    public function show(Answer $answer)
    {
        return $answer;
    }


    public function update(Request $request, Answer $answer)
    {
        $request->validate([
            'evaluation_value'=>'required',
        ]);

        $answer->evaluation_value = $request->evaluation_value;
        $answer->update();
        return $answer;
    }

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
