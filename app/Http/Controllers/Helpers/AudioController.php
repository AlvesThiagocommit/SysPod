<?php

namespace App\Http\Controllers\Helpers;

use DataURI\Parser;
use App\Utils\Utils;
use Mimey\MimeTypes;
use Illuminate\Support\Facades\Storage;

class AudioController
{
    public function __construct($audio)
    {
        $this->uri = $audio['uri'];
        $this->extension = $audio['extension'];
        $this->id = Utils::nanoid();
        $this->audio = $this->parse();
        $this->store();
    }

    private function parse()
    {
        return Parser::parse($this->uri);
    }

    private function path()
    {
        
        $path = 'audios/'.$this->id.'.'.$this->extension;
        return $path;
    }

    private function store()
    {
        $audio = $this->audio->getData();
        Storage::disk('s3')->put($this->path(), $audio, 'public');
    }

    public function url()
    {
        $url = Storage::disk('s3')->url($this->path());
        return $url;
    }
}
