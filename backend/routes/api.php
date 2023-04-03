<?php

use App\Http\Controllers\AnswerController;
use App\Http\Controllers\EvaluationController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\RubricController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::apiResource('users', UserController::class);
Route::post('register', [UserController::class, 'register']);
Route::post('login', [UserController::class, 'login']);

Route::group(['middleware' => ["auth:sanctum"]], function(){
    Route::get('user-profile', [UserController::class, 'userProfile']);
    Route::get('logout', [UserController::class, 'logout']);
});

Route::apiResource('projects', ProjectController::class);
Route::apiResource('rubrics', RubricController::class);
Route::apiResource('evaluations', EvaluationController::class);
Route::apiResource('answers', AnswerController::class);