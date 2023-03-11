<?php

namespace App\Http\Controllers;

use App\Models\Rubric;
use Illuminate\Http\Request;

class RubricController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Rubric::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title'=>'required',
            'description'=>'required',

        ]);
        $rubric = new Rubric();
        $rubric->title =  $request->title;
        $rubric->description = $request->description;

        $rubric->save();
        return $rubric;
    }

    /**
     * Display the specified resource.
     */
    public function show(Rubric $rubric)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Rubric $rubric)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Rubric $rubric)
    {
        //
    }
}
