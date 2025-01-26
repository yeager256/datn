<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'address_id',
        'user_id',
        'voucher_id',
        'order_code',
        'shipping_fee',
        'subtotal',
        'total',
        'payment_method',
        'payment_status',
        'status',
        'note'
    ];
}
