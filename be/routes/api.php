<?php

use App\Enums\RoleEnum;

use App\Http\Controllers\User\UserController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Product\ProductController;
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

// Route::group(['middleware' => 'jwt.auth'], function () {
//     Route::get('/users', SearchUserController::class);
// });

Route::group([], function () {
    Route::get('/products', [ProductController::class, 'getProducts']);
    Route::get('/products/{id}', [ProductController::class, 'getProductById']);
//    Route::get('/users', [UserController::class, 'index']);
});
Route::group(['middleware' => ['jwt.auth']], function () {
    Route::group(['prefix' => 'product'], function () {
        Route::post('/add', [ProductController::class, 'addProduct']);
        Route::post('/update/{id}', [ProductController::class, 'updateProduct']);
        Route::delete('/delete/{id}', [ProductController::class, 'deleteProduct']);
    });
});

Route::group(['middleware' => ['jwt.auth']], function () {
    Route::group(['prefix' => 'user'], function () {
        Route::get('/{id}', [UserController::class, 'show_by_user']);
        Route::post('/change-password', [UserController::class, 'change_password_by_user']);
        Route::put('/{id}', [UserController::class, 'update_by_user']);
    });
});
