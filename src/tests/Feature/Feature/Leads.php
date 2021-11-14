<?php

namespace Tests\Feature\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class Leads extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_example()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function testGetAllLeadsWithStatusNewAndAccepted()
    {
        $this->json('GET', 'api/leads')
            ->assertStatus(200)
    }
    public function updateLeadWithStatusNewOrAccepted()
    {
        $payload = ['status' => 'accepted'];
        $this->json('PUT', 'api/leads/1',$payload)
            ->assertStatus(200)
    }
}
