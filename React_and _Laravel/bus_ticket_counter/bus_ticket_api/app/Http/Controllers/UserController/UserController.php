<?php

namespace App\Http\Controllers\UserController;

use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Requests\CustomRequestHandler;



class UserController extends Controller
{

    public function go(Request $request, Response $response)
    {
       
        $action = $request->action;
        switch ($action) {

            case 'createCustomer':
                $this->createCustomer($request);
                break;

            default:
                return "invalid request ";
                break;
        }


    }

    public function createCustomer(Request  $request)
    {



        $user = new User;
        $user->name= $request->input('name');
        $user->email= $request->input('email');
        $user->password =Hash::make( $request->input('password'));
        $user->save();
        // return  $user;
        return response()->json('success');

       
    }



}
