<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserPayment extends Model
{
     use HasFactory;

     // Specify the table name if it's not the plural form of the model name
     protected $table = 'user_payment';

     // Specify the primary key if it's not the default 'id'
     protected $primaryKey = 'id';

     // Indicate if the IDs are not auto-incrementing
     public $incrementing = false;

     // Specify the type of the primary key
     protected $keyType = 'string';

     // Define which attributes are mass assignable
     protected $fillable = [
          'id',
          'user_name',
          'address',
          'phone',
          'quantity',
          'product_id',
     ];

     // Các thuộc tính ngày tháng
     protected $dates = [
          'created_at',
          'updated_at'
     ];
}
