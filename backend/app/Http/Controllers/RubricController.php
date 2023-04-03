<?php

namespace App\Http\Controllers;

use App\Models\Rubric;
use App\Models\Evaluation;
use App\Models\User;
use App\Models\Project;

use App\Http\Controllers\ProjectController;
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
            'title' => 'required',
            'description' => 'required',
            'user_id' => 'required',
            'project_id' => 'required'
        ]);
        $rubric = new Rubric();
        $rubric->title =  $request->title;
        $rubric->description = $request->description;
        $rubric->user_id =  $request->user_id;
        $rubric->project_id =  $request->project_id;

        $rubric->save();
        return $rubric;
    }

    public function update(Request $request, Rubric $rubric)
    {
        $request->validate([
            'title'=>'required',
            'description'=>'required',

        ]);

        $rubric->title =  $request->title;
        $rubric->description = $request->description;


        $rubric->update();
        return response()->json('Proyecto modificado!', 200);
    }

    public function show(Rubric $rubric)
    {
        $evaluations = $rubric->evaluations;
        $user = $rubric->user;
        $project = $rubric->project;
        return $rubric;
        return response()->json([
            'rubric' => $rubric,

        ]);
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

    public function filterRubricByProject(Project $project){
        $idProject = Project::find($project);
        return $idProject;
    }
}
