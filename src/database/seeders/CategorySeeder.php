<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Categories;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         $categories = [
             [
	            'name' => 'Plumbing',
	            'parent_category_id' => 0
        	],
        	[
	            'name' => 'Electrical',
	            'parent_category_id' => 0
        	],
        	[
	            'name' => 'Carpentry',
	            'parent_category_id' => 0
        	],
        	[
	            'name' => 'Handyman',
	            'parent_category_id' => 0
        	],
        	[
	            'name' => 'Building',
	            'parent_category_id' => 0
        	],
        	[
	            'name' => 'Bathroom Renovation',
	            'parent_category_id' => 5
        	]
        ];

         foreach ($categories as $category) {
            Categories::create($category);
        }
    }
}
