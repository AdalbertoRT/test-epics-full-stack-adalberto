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

Route::prefix('/customers')->group(function () {
    //DATA OF CUSTOMER BY ID (for Edit)
    Route::get('id/{id}', [UserController::class, 'showCustomerById'])->name('showById');

    //DATA OF CUSTOMER BY NAME
    Route::get('name/{name}', [UserController::class, 'showCustomerByName'])->name('showByName');

    //DATA OF CUSTOMER BY MEMBERSHIP
    Route::get('members/{member}', [UserController::class, 'showCustomerByMembers'])->name('showByMembership');

    //ADD CUSTOMER
    Route::post('new', [UserController::class, 'store'])->name('store');

    //EDIT CUSTOMER
    Route::put('edit/{id}', [UserController::class, 'update'])->name('update');

    //DELETE CUSTOMER
    Route::delete('delete/{id}', [UserController::class, 'destroy'])->name('delete');
});

//LIST OF CUSTOMERS (HOMEPAGE)
Route::get('/', [UserController::class, 'index'])->name('home');
