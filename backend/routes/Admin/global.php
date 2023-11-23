<?php

use App\Http\Controllers\Admin\CategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::controller(CategoryController::class)->group(function(){
    Route::get('/categories','retrieveCategories');
});