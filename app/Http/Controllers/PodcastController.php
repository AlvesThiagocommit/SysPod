<?php

namespace App\Http\Controllers;

use App\Podcast;
use App\Utils\Utils;
use Illuminate\Http\Request;
use App\Http\Controllers\Helpers\ThumbnailController as Thumbnail;
use App\Http\Controllers\Helpers\AudioController as Audio;

class PodcastController extends Controller
{
    public function create(Request $request)
    {
        $validator = Utils::validate($request->all(), [
            'title' => 'required|string|max:100',
            'episode' => 'required|integer|unique:podcasts,episode',
            'note' => 'required|string|max:500',
            'thumbnail' => 'required|string',
            'audio' => 'required|array',
            'audio.uri' => 'required|string',
            'audio.extension' => 'required|string',
            'is_private' => 'required|boolean',
            'scheduled_at' => 'nullable|date|after:now'
        ]);
        if ($validator->fails()) {
            return Utils::invalid($validator);
        }
        $thumbnail = new Thumbnail($request->thumbnail);
        $audio = new Audio($request->audio);
        $podcast = Podcast::create([
            'title' => $request->title,
            'episode' => $request->episode,
            'note' => $request->note,
            'thumbnail' =>  $thumbnail->url(),
            'audio' => $audio->url(),
            'is_private' => $request->is_private,
            'scheduled_at' => $request->scheduled_at
        ]);
        return Utils::response($podcast);
    }

    public function list()
    {
        $podcasts = Podcast::where('is_private', false)
            ->latest('episode')
            ->get();
        return Utils::response($podcasts);
    }

    public function top()
    {
        $podcasts = Podcast::withCount('plays')
            ->latest('plays_count')
            ->limit(3)
            ->get();
        return Utils::response($podcasts);
    }

    public function paginate()
    {
        $podcasts = Podcast::withCount('plays')
            ->latest('id')
            ->paginate();
        return Utils::response($podcasts);
    }

    public function trash()
    {
        $podcasts = Podcast::onlyTrashed()
            ->latest('deleted_at')
            ->paginate();
        return Utils::response($podcasts);
    }

    public function read(Podcast $podcast)
    {
        return Utils::response($podcast);
    }

    public function edit(Request $request, Podcast $podcast)
    {
        $validator = Utils::validate($request->all(), [
            'title' => 'required|string|max:100',
            'episode' => 'required|integer|unique:podcasts,episode,'.$podcast->id,
            'note' => 'required|string|max:500',
            'thumbnail' => 'nullable|string',
            'audio' => 'nullable|array',
            'audio.uri' => 'required_with:audio|string',
            'audio.extension' => 'required_with:audio|string',
            'is_private' => 'required|boolean',
            'scheduled_at' => 'nullable|date|after:now'
        ]);
        if ($validator->fails()) {
            return Utils::invalid($validator);
        }
        $podcast->update([
            'title' => $request->title,
            'episode' => $request->episode,
            'note' => $request->note,
            'is_private' => $request->is_private,
            'scheduled_at' => $request->scheduled_at
        ]);
        if ($request->thumbnail) {
            $thumbnail = new Thumbnail($request->thumbnail);
            $podcast->update([ 'thumbnail' =>  $thumbnail->url() ]);
        }
        if ($request->audio) {
            $audio = new Audio($request->audio);
            $podcast->update([ 'audio' => $audio->url() ]);
        }
        return Utils::response($podcast);
    }

    public function delete(Podcast $podcast)
    {
        $podcast->delete();
    }

    public function restore($podcast)
    {
        $podcast = Podcast::onlyTrashed()->find($podcast);
        if (!$podcast) return abort(404);
        $podcast->restore();
    }

    public function count()
    {
        $count = [ 'count' => Podcast::count() ];
        return Utils::response($count);
    }
}
