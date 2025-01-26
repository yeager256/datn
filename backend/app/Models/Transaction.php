<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    protected $fillable = [
        'bank_id',
        'bank_brand_name',
        'order_code',
        'account_number',
        'transaction_date',
        'amount_out',
        'amount_in',
        'accumulated',
        'transaction_content',
        'reference_number',
    ];
}
