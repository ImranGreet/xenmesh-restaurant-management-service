<?php

namespace App\Http\Controllers\Utility;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SettingsIconController extends Controller
{
    public function storeIcons(Request $request)
    {
        $request->validate([
            'icon' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'icon_name' => 'required|string',
            'icon_category' => 'required|string',
        ]);
    }
}
