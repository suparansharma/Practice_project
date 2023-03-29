<?php

namespace App\Http\Controllers;

use App\Models\Device;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DeviceController extends Controller
{
    function addDevice(Request $req ){
        $device = new Device;
        $device->name = $req->name;
        $device->memder_id = $req->memder_id;
        $device->status = 1;
        $result = $device->save();
        if($result){
            
            return["Result"=>"Data has been save successfully"];
        }
        else{
            return["Result"=>"Error"];
        }
    }




    function updateDevice(Request $req ){


        $result = DB::table('devices')
        ->where('id', $req->id)
        ->update(['name' => $req->name]);

        // $device = Device::find($req ->id);
        // $device->name = $req->name;
        // $device->memder_id = $req->memder_id;
        // $result = $device->save();
        if($result){
            
            return["Result"=>"Data has been updated successfully"];
        }
        else{
            return["Result"=>"Error"];
        }

    }


    function deviceSearch($name){
        // return Device :: where("name",$name)->get();
        return Device :: where("name","like","%".$name."%")->get();
    }
}
