<?php

use App\Enums\RoleEnum;
use App\Http\Controllers\Candidate\CandidateController;
use App\Http\Controllers\Companies\CompaniesController;
use App\Http\Controllers\Contact\ContactController;
use App\Http\Controllers\Inquiry\InquiryController;
use App\Http\Controllers\Libraries\LibrariesController;
use App\Http\Controllers\Picture\PictureController;
use App\Http\Controllers\Project\ProjectController;
use App\Http\Controllers\Qna\QnaController;
use App\Http\Controllers\RecruitmentPost\RecruitmentPostController;
use App\Http\Controllers\Section\SectionController;
use App\Http\Controllers\SectionLocale\SectionLocaleController;
use App\Http\Controllers\User\UserController;
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

require __DIR__ . '/auth.php';

// Route::group(['middleware' => 'jwt.auth'], function () {
//     Route::get('/users', SearchUserController::class);
// });

Route::group([], function () {
   
});

Route::group(['middleware' => ['jwt.auth', 'jwt.auth:' . RoleEnum::ADMINISTRATOR->value]], function () {
    Route::group(['prefix' => 'user'], function () {
        Route::group(['prefix' => 'admin'], function () {
            Route::get('', [UserController::class, 'index']);
            Route::get('/{id}', [UserController::class, 'show_by_admin']);
            Route::put('/{id}', [UserController::class, 'update_by_admin']);
            Route::delete('/{id}', [UserController::class, 'destroy']);
            Route::delete('', [UserController::class, 'deleteMany']);
            Route::post('', [UserController::class, 'create_by_admin']);
        });
    });

    
});

Route::group(['middleware' => ['jwt.auth']], function () {
    Route::group(['prefix' => 'user'], function () {
        Route::get('/{id}', [UserController::class, 'show_by_user']);
        Route::post('/change-password', [UserController::class, 'change_password_by_user']);
        Route::put('/{id}', [UserController::class, 'update_by_user']);
    });
});
