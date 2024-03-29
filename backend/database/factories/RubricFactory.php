<?php

namespace Database\Factories;


use App\Models\Project;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Rubric>
 */
class RubricFactory extends Factory
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
            'user_id'=> User::pluck('id')->random(),
            'project_id'=> Project::pluck('id')->random(),
        ];
    }
}
