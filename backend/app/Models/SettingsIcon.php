<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SettingsIcon extends Model
{
    use HasFactory;

    protected $table = 'settings_icons';
    protected $fillable = [
        'user_id',
        'icon',
        'icon_name',
        'icon_category',
    ];
}
