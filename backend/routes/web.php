<?php

use Illuminate\Support\Facades\Route;

Route::get('/rubrics', 'RubricController@index');
Route::post('/rubrics', 'RubricController@store');
Route::get('/rubrics/{id}', 'RubricController@show');
Route::put('/rubrics/{id}', 'RubricController@update');
Route::delete('/rubrics/{id}', 'RubricController@destroy');


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
