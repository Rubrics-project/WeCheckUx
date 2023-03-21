<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::disableForeignKeyConstraints();

        Schema::create('evaluations', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description');
            $table->text('evaluation_text');
            $table->text('negative');
            $table->text('regular');
            $table->text('suficient');
            $table->text('good');
            $table->text('excelent');
            $table->unsignedBigInteger('rubric_id');
            $table->foreign('rubric_id')->references('id')->on('rubrics');
            $table->timestamps();
        });
        Schema::enableForeignKeyConstraints();
    }


    public function down(): void
    {
        Schema::dropIfExists('evaluations');
    }
};
