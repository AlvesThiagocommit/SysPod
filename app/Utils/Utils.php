<?php

namespace App\Utils;

use Illuminate\Support\Facades\Validator;
use Hidehalo\Nanoid\Client as Nanoid;

class Utils
{
  public static function error ($message, $statusCode = 400)
  {
      $response['error'] = [$message];
      return response()->json($response, $statusCode);
  }

  public static function validate ($data, $rule)
  {
    return Validator::make($data, $rule);
  }

  public static function invalid ($validator)
  {
    return response()->json($validator->errors(), 422);
  }

  public static function response ($data, $statusCode = 200)
  {
    return response()->json($data, $statusCode);
  }

  public static function nanoid()
  {
    $nanoid = new Nanoid();
    return $nanoid->generateId(32);
  }
}