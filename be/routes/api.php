<?php

use App\Enums\RoleEnum;

use App\Http\Controllers\User\UserController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Product\ProductController;
use App\Http\Controllers\UserPayment\UserPaymentController;
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

require __DIR__ . '/auth.php';

Route::group([], function () {
    Route::get('/products', [ProductController::class, 'getProducts']);
    Route::get('/products/{id}', [ProductController::class, 'getProductById']);
    Route::post('/user_payment/add',[UserPaymentController::class, 'addUserPayment'] );
});
Route::group(['middleware' => ['jwt.auth']], function () {
    Route::group(['prefix' => 'product'], function () {
        Route::post('/add', [ProductController::class, 'addProduct']);
        Route::post('/update/{id}', [ProductController::class, 'updateProduct']);
        Route::delete('/delete/{id}', [ProductController::class, 'deleteProduct']);
    });
    Route::group(['prefix' => 'user_payment'], function () {
        Route::get('', [UserPaymentController::class, 'getUserPayment']);
        Route::delete('/delete/{id}', [UserPaymentController::class, 'deleteUserPayment']);
    });
});

Route::group(['middleware' => ['jwt.auth']], function () {
    Route::group(['prefix' => 'user'], function () {
        Route::get('/{id}', [UserController::class, 'show_by_user']);
        Route::post('/change-password', [UserController::class, 'change_password_by_user']);
        Route::put('/{id}', [UserController::class, 'update_by_user']);
    });
});
