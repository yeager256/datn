<?php

namespace Database\Seeders;

use App\Models\User;
use Hash;
use Illuminate\Database\Seeder;
use Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        User::insert([
            ['uuid' => Str::uuid(), 'email' => 'admin@gmail.com', 'username' => 'admin@gmail.com', 'full_name' => 'Test Admin', 'password' => Hash::make('123456'), 'avatar_url' => 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg'],
        ]);


    }
}
