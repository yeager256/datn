<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Voucher extends Model
{
    protected $fillable = [
        'code',
        'title',
        'date_start',
        'date_end',
        'discount_amount',
        'quantity',
        'minimum_price'
    ];
}
