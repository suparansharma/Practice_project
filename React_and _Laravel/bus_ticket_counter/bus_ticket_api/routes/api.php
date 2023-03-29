<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DeviceController;
use App\Http\Controllers\UserController\UserController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('login', [AuthController::class,'login']);
Route::post('users', [UserController::class,'getAllUsers']);
Route::post('userss', [UserController::class,'userInfoParams']);
Route::post('users/{id?}', [UserController::class,'getUserInfo']);

Route::post('device/add', [DeviceController::class,'addDevice']);
Route::post('device/update', [DeviceController::class,'updateDevice']);
Route::get('device/search/{name}', [DeviceController::class,'deviceSearch']);
Route::delete('device/{id?}', [DeviceController::class,'deleteDevice']);


Route::post('register',[AuthController::class,'register']);
Route::post('user', [UserController::class,'go']);
Route::get('user', [UserController::class, 'go']);
Route::group(['middleware' => 'api',], function ($router) {

    Route::post('logout', [AuthController::class,'logout']);
    Route::post('refresh', [AuthController::class,'refresh']);
    Route::post('me', [AuthController::class,'me']);

    // Route::post('user', [UserController::class, 'go']);

});