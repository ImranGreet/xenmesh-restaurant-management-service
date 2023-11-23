<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Auth\Item;
use Illuminate\Http\Request;

class ItemController extends Controller
{
     public function retriveItems (){
        $items = Item::all();
        return response()->json([
             "menu">$items,
            'message'=>"Products retrieve successfully",
            "status"=>200
        ]);
     }

     
}
