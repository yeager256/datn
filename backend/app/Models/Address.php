<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    protected $fillable = [
        'name',
        'phone',
        'user_id',
        'province_id',
        'district_id',
        'ward_id',
        'address_detail',
        'is_default'
    ];
}
