<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Carbon\Carbon;

class UserPaymentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
      $productId = DB::table('products')->inRandomOrder()->value('id');
         // Chèn dữ liệu vào bảng user_payment
         DB::table('user_payment')->insert([
            'id' => (string) Str::uuid(),
            'user_name' => 'admin',
            'address' => 'TTHue',
            'phone' => '0123456789',
            'quantity' => 1, // Sửa thành integer nếu quantity là số nguyên
            'product_id' => $productId,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}
