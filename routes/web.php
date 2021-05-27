<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/student',function(){
    return view('image_crud');
});
Route::post('/create','UserCreate@create');
Route::get('/read','UserCreate@read');
Route::post('/delete','UserCreate@delete');
Route::post('/update','UserCreate@update');
