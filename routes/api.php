<?php

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//LIST OF CUSTOMERS (HOMEPAGE)
Route::get('/dashboard', [UserController::class, 'index'])->name('dashboard');
Route::get('/appointments', [UserController::class, 'index'])->name('appointments');
Route::get('/customers', [UserController::class, 'index'])->name('customers');
Route::get('/finances', [UserController::class, 'index'])->name('finances');
Route::get('/reports', [UserController::class, 'index'])->name('reports');
Route::get('/settings', [UserController::class, 'index'])->name('settings');
Route::get('/', [UserController::class, 'index'])->name('home');
