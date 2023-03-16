<?php

namespace App\Http\Controllers;

use App\Models\Rubric;
use Illuminate\Http\Request;

class RubricController extends Controller
{

    public function index()
    {
        return Rubric::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'title'=>'required',
            'description'=>'required',
            'user_id'=> 'required',
            'evaluation_id'=> 'required',
            'project_id' => 'required'
        ]);
        $rubric = new Rubric();
        $rubric->title =  $request->title;
        $rubric->description = $request->description;
        $rubric->user_id =  $request->user_id;
        $rubric->evaluation_id =  $request->evaluation_id;
        $rubric->project_id =  $request->project_id;

        $rubric->save();
        return $rubric;
    }


    public function show(Rubric $rubric)
    {
        return $rubric;
    }

    public function update(Request $request, Rubric $rubric)
    {
        $request->validate([
            'title'=>'required',
            'description'=>'required',
            // 'user_id'=> 'required',
            // 'evaluation_id'=> 'required',
            // 'project_id' => 'required'
        ]);

        $rubric->title =  $request->title;
        $rubric->description = $request->description;
        // $rubric->user_id =  $request->user_id;
        // $rubric->evaluation_id =  $request->evaluation_id;
        // $rubric->project_id =  $request->project_id;

        $rubric->update();
        return response()->json('Proyecto modificado!', 200);
    }


    public function destroy($id)
    {
        $rubric = Rubric::find($id);
        if(is_null($rubric)){
            return response()->json("Rúbrica no encontrada", 404);
        }
        $rubric->delete();
        return response()->json("¡La rúbrica se ha eliminado con éxito!", 200);
    }
}
