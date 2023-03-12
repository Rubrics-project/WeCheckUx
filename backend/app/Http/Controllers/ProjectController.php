<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Project::all();
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

        $project = new Project;
        $project->name = $request->name;
        $project->url = $request->url;
        $project->description = $request->description;

        $project->save();
        return $project;
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        return $project;
    }

    /**
     * Update the specified resource in storage.
     */
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
        return $project;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $project = Project::find($id);
        if(is_null($project)){
            return response()->json('Proyecto no encontrado', 404);
        }
        $project->delete();
        return response()->noContent();
    }
}
