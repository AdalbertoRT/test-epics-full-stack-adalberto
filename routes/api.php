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

//DATA OF CUSTOMER BY ID
Route::get('/customers/{id}', [UserController::class, 'showCustomerById'])->name('showById');

//DATA OF CUSTOMER BY NAME
Route::get('/customers/name/{name}', [UserController::class, 'showCustomerByName'])->name('showByName');

//DATA OF CUSTOMER BY MEMBERSHIP
Route::get('/members/{member}', [UserController::class, 'showCustomerByMembers'])->name('showByMembership');

//LIST OF CUSTOMERS (HOMEPAGE)
Route::get('/', [UserController::class, 'index'])->name('home');
