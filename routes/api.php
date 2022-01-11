<?php

use Illuminate\Support\Facades\Route;

Route::middleware('fresh.deployment')->group(function() {
    Route::get('server/verify', 'ServerController@verify');
    Route::get('license/verify', 'LicenseController@verify');
    Route::post('users', 'UserController@create');
    Route::post('settings', 'SettingsController@create');
});

Route::prefix('auth')->group(function() {
    Route::post('login', 'AuthController@login');
    Route::get('logout', 'AuthController@logout');
});

Route::middleware('auth:api')->group(function() {
    Route::prefix('users')->group(function() {
        Route::get('', 'UserController@read');
        Route::put('', 'UserController@edit');
    });

    Route::prefix('hosts')->group(function() {
        Route::post('', 'HostController@create');
        Route::get('paginate', 'HostController@paginate');
        Route::get('trash', 'HostController@trash');
        Route::get('{host}', 'HostController@read');
        Route::put('{host}', 'HostController@edit');
        Route::delete('{host}', 'HostController@delete');
        Route::delete('trash/{host}', 'HostController@restore');
        Route::get('count', 'HostController@count');
    });
    
    Route::prefix('podcasts')->group(function() {
        Route::post('', 'PodcastController@create');
        Route::get('top', 'PodcastController@top');
        Route::get('paginate', 'PodcastController@paginate');
        Route::get('trash', 'PodcastController@trash');
        Route::get('{podcast}', 'PodcastController@read');
        Route::put('{podcast}', 'PodcastController@edit');
        Route::delete('{podcast}', 'PodcastController@delete');
        Route::delete('trash/{podcast}', 'PodcastController@restore');
        Route::get('count', 'PodcastController@count');
    });
    
    Route::prefix('plays')->group(function() {
        Route::get('weekly', 'PlayController@weekly');
        Route::get('count', 'PlayController@count');
    });

    Route::prefix('visits')->group(function() {
        Route::get('weekly', 'VisitController@weekly');
        Route::get('count', 'VisitController@count');
    });

    Route::prefix('settings')->group(function() {
        Route::put('', 'SettingsController@edit');
    });
});

Route::get('hosts', 'HostController@list');
Route::get('podcasts', 'PodcastController@list');
Route::post('plays', 'PlayController@create');
Route::post('visits', 'VisitController@create');
Route::get('settings', 'SettingsController@read');
Route::get('install/verify', 'InstallController@verify');