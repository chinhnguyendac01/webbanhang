<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            [
                'id' => (string) Str::uuid(),
                'username' => 'admin',
                'password' => Hash::make('password'), // Always hash passwords
                'role' => 1,
                'created_at' => now(),
                'created_by' => 'system',
            ],
            [
                'id' => (string) Str::uuid(),
                'username' => 'admindev',
                'password' => Hash::make('password'), // Always hash passwords
                'role' => 1,
                'created_at' => now(),
                'created_by' => 'system',
            ],

        ]);
    }
}
