<?php

namespace App\Http\Controllers;

use App\Visit;
use App\Utils\Utils;
use Illuminate\Support\Carbon;

class VisitController extends Controller
{
    public function create()
    {
        $visit = [ 'created_at' => Carbon::now() ];
        Visit::create($visit);
    }

    public function weekly()
    {
        $start = Carbon::now()->subDays(7);
        $now = Carbon::now();
        $visits = Visit::whereBetween('created_at', [$start, $now])->get();
        return Utils::response($visits);
    }

    public function count()
    {
        $count = [ 'count' => Visit::count() ];
        return Utils::response($count);
    }
}
