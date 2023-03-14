<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Evaluation>
 */
class EvaluationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title'=> fake()->sentence(),
            'description'=> fake()->paragraph(),
            'evaluation_text'=> fake()->paragraph(),
            'negative'=> fake()->paragraph(),
            'regular'=> fake()->paragraph(),
            'suficient'=> fake()->paragraph(),
            'good'=> fake()->paragraph(),
            'excelent'=> fake()->paragraph(),
        ];
    }
}
