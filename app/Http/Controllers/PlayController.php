<?php

namespace App\Http\Controllers;

use App\Play;
use App\Podcast;
use App\Utils\Utils;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class PlayController extends Controller
{
    public function create(Request $request) // 
    {
        $validator = Utils::validate($request->all(), [
            'podcast_id' => 'required|integer|exists:podcasts,id',
        ]);
        if ($validator->fails()) {
            return Utils::invalid($validator);
        }
        $podcast = Podcast::find($request->podcast_id);
        if (!$podcast) return;
        $play = [ 'created_at' => Carbon::now() ];
        $podcast->plays()->create($play);
    }

    public function weekly()
    {
        $start = Carbon::now()->subDays(7);
        $now = Carbon::now();
        $plays = Play::whereBetween('created_at', [$start, $now])->get();
        return Utils::response($plays);
    }

    public function count()
    {
        $count = [ 'count' => Play::count() ];
        return Utils::response($count);
    }
}
