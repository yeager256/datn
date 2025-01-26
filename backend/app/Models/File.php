<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    protected $fillable = [
        'url',
        'type',
        'size',
        'from',
        'public_id',
        'user_id'
    ];
}
