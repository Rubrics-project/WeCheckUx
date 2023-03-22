<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Rubric;
use Illuminate\Http\Request;

class ProjectController extends Controller
{

    public function index()
    {
        return Project::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'name'=>'required',
            'url'=>'required',
            'description'=>'required',
        ]);

        $project = new Project;
        $project->name = $request->name;
        $project->url = $request->url;
        $project->description = $request->description;

        $project->save();
        return $project;
    }

    public function update(Request $request, Project $project)
    {
        $request->validate([
            'name'=>'required',
            'url'=>'required',
            'description'=>'required',
        ]);

        $project->name = $request->name;
        $project->url = $request->url;
        $project->description = $request->description;

        $project->update();
        return response()->json('Proyecto modificado!', 200);
    }

    public function show(Project $project)
    {

        $rubrics = $project->rubrics;

        // $user = $rubrics->user;
        // $user = $project->user;

        return response()->json([
            'project' => $project,
            // 'user' =>$user
        ]);
    }

    public function destroy($id)
    {
        $project = Project::find($id);
        if(is_null($project)){
            return response()->json('Proyecto no encontrado', 404);
        }
        $project->delete();
        return response()->json('¡El proyecto se ha eliminado con éxito!', 200);
    }
}
