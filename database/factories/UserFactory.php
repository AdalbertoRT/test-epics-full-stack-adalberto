<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'email' => $this->faker->unique()->safeEmail(),
            // 'picture' => $this->faker->image(public_path('images'), 150, 150),
            // 'picture' => "https://source.unsplash.com/random/200x200?portrait",
            'picture' => 'default.jpg',
            // 'picture' => fetch('https://source.unsplash.com/200x200/?portrait').then(response => response.blob().then(src => URL.createObjectURL(src));
            'phone_number' => $this->faker->phone(),
            'birthdate' => $this->faker->date($format = 'Y-m-d', $max = 'now'),
            'gender' => $this->faker->randomElement($array = array('male','female','others')),
            'membership' => $this->faker->randomElement($array = array('yes','no')),
            'ltv' => $this->faker->randomFloat($nbMaxDecimals = 2, $min = 0, $max = 999999),
            'last_visit' => $this->faker->dateTime($max = 'now', $timezone = null)
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return static
     */
    // public function unverified()
    // {
    //     return $this->state(function (array $attributes) {
    //         return [
    //             'email_verified_at' => null,
    //         ];
    //     });
    // }
}
