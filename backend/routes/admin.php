<?php

use App\Http\Controllers\Admin\ProductCategoryController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\ProductOfferController;
use Illuminate\Support\Facades\Route;

Route::controller(ProductController::class)->group(function(){
    Route::post('/insert_product','storeProduct')->name('store_product');
});


Route::controller(ProductCategoryController::class)->group(function(){
    Route::post('/insert_category','createProductCategory')->name('store_category');
});

Route::controller(ProductOfferController::class)->group(function(){
    Route::post('/insert_offer','createOffer')->name('store_offer');
});

