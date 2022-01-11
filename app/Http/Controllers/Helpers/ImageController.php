<?php

namespace App\Http\Controllers\Helpers;

use App\Utils\Utils;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\ImageManagerStatic as Image;

class ImageController extends Controller
{
    private $uri;
    private $id;
    private $image;
    protected $width;
    protected $type;

    public function __construct($uri)
    {
        $this->uri = $uri;
        $this->id = Utils::nanoid();
        $this->encode();
    }

    private function encode()
    {
        $this->image = Image::make($this->uri);
    }

    private function resize()
    {
        $image = $this->image
            ->resize($this->width, null, function ($constraint) {
                $constraint->aspectRatio();
            })->encode();
        return $image;
    }

    private function extension()
    {
        $extension = explode('/', $this->image->mime())[1];
        return $extension;
    }

    private function path()
    {
        $path = $this->type.'/'.$this->id.'.'.$this->extension();
        return $path;
    }

    protected function store()
    {
        $image = $this->resize();
        Storage::disk('s3')->put($this->path(), $image, 'public');
    }

    public function url()
    {
        $url = Storage::disk('s3')->url($this->path());
        return $url;
    }
}
