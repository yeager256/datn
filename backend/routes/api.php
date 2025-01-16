<?php
use Illuminate\Support\Facades\Route;


Route::get('/docs/api-docs.json', function () {
    return response()->json(\Swagger\scan(app_path()));
});

