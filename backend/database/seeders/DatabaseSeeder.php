<?php

namespace Database\Seeders;

use App\Models\User;
use DB;
use Exception;
use File;
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
            [ 'email' => 'admin@gmail.com', 'name' => 'Test Admin', 'password' => Hash::make('123456'), 'avatar' => 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg'],
        ]);
        try {
            $sql = File::get(database_path('sql\db.sql'));
            DB::unprepared($sql);

            $this->command->info('SQL file executed successfully.');
        } catch (Exception $e) {
            $this->command->error('Error executing SQL file: ' . $e->getMessage());
        }

    }
}
