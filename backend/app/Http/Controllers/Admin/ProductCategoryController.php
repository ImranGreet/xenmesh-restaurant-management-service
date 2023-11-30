<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\ProductCategory;
use Illuminate\Http\Request;

class ProductCategoryController extends Controller
{

    public function createProductCategory(Request $request){

        $request->validate([
            'category_name' => ['required', 'string', 'max:255'],
            'category_thumbnail'=>['required', 'string', 'max:255'],
        ]);

        $category = ProductCategory::create([
            'category_name'=>$request->category_name,
            'category_thumbnail'=>$request->category_thumbnail,
        ]);

        $category->save();
        return response()->json([
            "message"=>"Product Category has been stored succesfully!",
        ]);
         
    }
    
}
