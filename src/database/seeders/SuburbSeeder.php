<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Suburb;

class SuburbSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $suburbs = [
             [
	            'name' => 'Sydney',
	            'postcode' => '2000'
        	],
        	[
	            'name' => 'Bondi',
	            'postcode' => '2026'
        	],
        	[
	            'name' => 'Manly',
	            'postcode' => '2095'
        	],
        	[
	            'name' => 'Surry Hills',
	            'postcode' => '2010'
        	],
        	[
	            'name' => 'Newtown',
	            'postcode' => '2042'
        	]
        ];

         foreach ($suburbs as $suburb) {
            Suburb::create($suburb);
        }
    }
}
