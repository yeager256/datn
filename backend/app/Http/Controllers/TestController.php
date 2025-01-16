<?php

namespace App\Http\Controllers;

use App\Models\Province;
use Http;
use Illuminate\Http\Request;

class TestController extends Controller
{
    public function test()
    {
        $data =Province::all()->map(function($item){
            $item->name_extention = json_decode($item->name_extention); 
            return $item;
        });
        return response()->json($data);
        $url = 'https://online-gateway.ghn.vn/shiip/public-api/master-data/province';

        $headers = [
            'token' => '940c76a0-1522-11ef-9201-0221b0d2310c',
            'Content-Type' => 'application/json'
        ];

        $response = Http::withHeaders($headers)->get($url);

        if ($response->successful()) {
            $data = $response->json()['data'];
            $data_arr = [];
            foreach ($data as $key => $value) {
                $data_arr[] = [
                    'id' => $value['ProvinceID'],
                    'name' => $value['ProvinceName'],
                    'code' => $value['Code'],
                    'name_extention' => json_encode($value['NameExtension']),
                ];
            }
            $result = Province::insert($data_arr);
            return $result;
        } else {
            // Handle errors (e.g., 4xx or 5xx status codes)
            return [
                'error' => 'Failed to fetch data',
                'status' => $response->status(),
                'message' => $response->body()
            ];
        }
    }
}
