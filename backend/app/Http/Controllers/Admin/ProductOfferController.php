<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\ProductOffer;
use Illuminate\Http\Request;

class ProductOfferController extends Controller
{
     public function createOffer(Request $request)
     {

        $request->validate([
            'product_category' => ['required', 'string', 'max:255'],
            'offer_rate'=>['required', 'numeric'],
        ]);

        $offer = ProductOffer::create([
            'product_category'=>$request->product_category,
            'offer_rate'=>$request->offer_rate,
        ]);

        $offer->save();

        return response()->json([
            "message"=>"Product Offer has been stored succesfully!",
        ]);
     }


}
