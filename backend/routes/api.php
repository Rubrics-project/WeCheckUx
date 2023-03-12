<?php

use App\Http\Controllers\AnswerController;
use App\Http\Controllers\EvaluationController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\RubricController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::apiResource('users', UserController::class);
Route::apiResource('projects', ProjectController::class);
Route::apiResource('rubrics', RubricController::class);
Route::apiResource('evaluations', EvaluationController::class);
Route::apiResource('answers', AnswerController::class);