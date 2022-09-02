<?php

use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\SeoController;
use \App\Http\Controllers\PaginationController;

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
    return view('index');
})->name('home');

Route::post('/site-info', [SeoController::class, 'check'])->name('site-info');
