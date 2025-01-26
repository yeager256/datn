<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'is_show',
        'price',
        'percent_sale',
        'stock',
        'sold',
        'desciption',
        'category_id'
    ];
}
