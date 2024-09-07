<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Carbon\Carbon;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('products')->insert([
            [
                'id' => (string) Str::uuid(),
                'name' => 'Product 1',
                'price' => 100000.00,
                'sale_price' => 90000.00,
                'image' => 'https://example.com/images/product1.jpg',
                'content' => 'Description of Product 1',
                'company' => 'aaa',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'id' => (string) Str::uuid(),
                'name' => 'Product 2',
                'price' => 150000.00,
                'sale_price' => null,
                'image' => 'https://example.com/images/product2.jpg',
                'content' => 'Description of Product 2',
                'company' => 'aaa',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'id' => (string) Str::uuid(),
                'name' => 'Product 3',
                'price' => 200000.00,
                'sale_price' => 180000.00,
                'image' => 'https://example.com/images/product3.jpg',
                'content' => 'Description of Product 3',
                'company' => 'aaa',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
