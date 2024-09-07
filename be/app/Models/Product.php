<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    // Đặt tên bảng tương ứng với bảng trong cơ sở dữ liệu
    protected $table = 'products';

    // Đặt khóa chính cho model
    protected $primaryKey = 'id';

    // Không tự động tăng giá trị khóa chính (do sử dụng UUID)
    public $incrementing = false;

    // Loại dữ liệu của khóa chính là UUID
    protected $keyType = 'string';

    // Các thuộc tính có thể gán hàng loạt
    protected $fillable = [
        'id',
        'name',
        'price',
        'sale_price',
        'image',
        'content',
        'company',

    ];

    // Các thuộc tính ngày tháng
    protected $dates = [
        'created_at',
        'updated_at'
    ];

    // Các thuộc tính số thực có thể gán hàng loạt
    protected $casts = [
        'price' => 'decimal:2',
        'sale_price' => 'decimal:2'
    ];
}
