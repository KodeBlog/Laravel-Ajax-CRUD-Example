<?php

use App\Task;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTasksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('task');
            $table->string('description');
            $table->boolean('done')->default(0);
            $table->timestamps();
        });

        Task::create([
            'task' => 'Weekend hookup',
            'description' => 'Call Helga in the afternoon',
            'done' => false,
        ]);

        Task::create([
            'task' => 'Late night coding',
            'description' => 'Finishing coding POS API',
            'done' => false,
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tasks');
    }
}
