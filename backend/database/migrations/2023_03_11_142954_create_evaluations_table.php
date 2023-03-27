<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        DB::beginTransaction();
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
            $table->foreignId('rubric_id')->constrained('rubrics');
            $table->timestamps();
        });
        Schema::enableForeignKeyConstraints();
    }


    public function down(): void
    {
        Schema::dropIfExists('evaluations');
    }
};
