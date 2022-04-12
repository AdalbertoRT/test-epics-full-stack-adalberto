<?php

use Illuminate\Support\Facades\Route;

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


//LIST OF CUSTOMERS (HOMEPAGE)
Route::get('/dashboard', function () {
    return view('welcome');
});
Route::get('/appointments', function () {
    return view('welcome');
});
Route::get('/customers', function () {
    return view('welcome');
});
Route::get('/finances', function () {
    return view('welcome');
});
Route::get('/reports', function () {
    return view('welcome');
});
Route::get('/settings', function () {
    return view('welcome');
});
Route::get('/', function () {
    return view('welcome');
});