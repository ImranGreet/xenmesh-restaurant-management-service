<?php

use App\Http\Controllers\Utility\SettingsIconController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::controller(SettingsIconController::class)->group(function(){
  Route::post('store-icons', 'storeIcons')->name('storeIcons');
});