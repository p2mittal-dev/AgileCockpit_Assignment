<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class School extends Model
{
    use HasFactory;
	protected $fillable = [
        'name','email','mobile','username','address','is_active','remember_token','created_at','updated_at'
    ];
}
