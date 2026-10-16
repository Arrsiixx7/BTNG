<?php

namespace App\Http\Controllers\Api;
use App\Models\Task;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    //Get /api/tasks
    public function index() {
        $tasks = Task::all();
        return response() ->json($tasks,200);
    }

    public function store(Request $request){
       $tasks = Task::create([
        'title' => $request->input('title'),
        'description' => $request->input('description'),
       ]);

       return response()->json($tasks, 201);
    }

    public function show($id){
        $task = Task::find($id);
        if(!$task){
            return response()->json(['message' => 'Task not found'], 404);
        }
        return response()->json($task, 200);
    }
}