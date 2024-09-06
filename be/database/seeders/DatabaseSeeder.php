<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            UserSeeder::class,
            LibrarySeeder::class,
            SectionSeeder::class,
            SectionLocaleSeeder::class,
            CompaniesSeeder::class,
            InquirySeeder::class,
            RecruitmentPostSeeder::class,
            QnaSeeder::class,
            PictureSeeder::class,
            ServiceSeeder::class,
            ProjectSeeder::class,
        ]);
    }
}
