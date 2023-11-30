<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    public function  storeProduct(Request $request){
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'price' => ['required', 'numeric', 'min:0.01'],
            'category'=>['required', 'string', 'max:255'],
            'description'=>['required'],
        ]);

        $product = Product::create([
            'name'=>$request->name,
            'price' =>$request->price,
            'category'=>$request->category,
            'description'=>$request->description,
            'slug'=> Str::slug($request->name,'-'),
        ]);

        $product->save();

        return response()->json([
            "message"=>"Product has been stored succesfully!",
        ]);
    }

    
}
