<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Auth\Category;

use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function retrieveCategories(){
        $categories = Category::all();
        return response()->json([
            'categories'=>$categories,
            'status'=>200
        ]);
    }

    public function createCategory(Request $request){
        
        $request->validate([
            'title' => ['required', 'string', 'max:15'],
            'category_thumbnail' => ['mimes:png,jpg,svg,jpeg'],
            'discount'=>['integer'] 
        ]);

        $cat = Category::create([
            'title'=>$request->title,
            'category_thumbnail'=>$request->category_thumbnail,
            'discount'=>$request->discount,
        ]);

        if($cat){
            return response()->json([
                'status'=>200,
                'message'=>'Item has been stored successfully'
            ]);
        }

    }

    public function updateCategory(Request $request, $id)
    {
        $request->validate([
            'title' => ['required', 'string', 'max:15'],
            'category_thumbnail' => ['mimes:png,jpg,svg,jpeg'],
            'discount'=>['integer'] 
        ]);

        $cat = Category::find($id);

        if ($request->category_thumbnail != null) {
            $fileName = md5(mt_rand(10000, 99999) . time()) . '.' . $request->thumbnail->extension();
            $request->thumbnail->move(storage_path('app/public/image'), $fileName);
            $cat->category_thumbnail = $fileName;
        }

        $cat->category = $request->category;
        $cat->user_id = 1;
        $cat->name = $request->name;
        $cat->description = $request->description;
        $cat->save();

    }

    public function updateCategoryStatus(Request $request){
        $cat = Category::find($request->id);
        if($cat->status == 1){
            $cat->status = 0;
            $cat->save();
        }else{
            $cat->status = 1;
            $cat->save();
        }
        return response()->json([
            "message"=>"Category stored successfully",
            "status"=>200
        ]);
    }


    public function deleteCategory(Request $request){
        $cat = Category::find($request->id);
        $cat->delete();
        return redirect()->back()->with('status','Category Has been deleted succesfully');
    }


}
