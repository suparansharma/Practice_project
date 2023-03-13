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
    protected $customResponse;
    protected $success;
    protected $outputData;
    protected $params;
    protected $responseMessage;
    public function __construct()
    {
    }

    public function go(Request $request, Response $response)
    {
        // return $request->action;
        // $this->params = CustomRequestHandler::getAllParams($request);
        $action = $request->action;
        switch ($action) {

            case 'createCustomer':
                $this->createCustomer();
                break;

            default:
                $this->responseMessage = "Invalid request!";
                return $this->customResponse->is400Response($response, $this->responseMessage);
                break;
        }

        if (!$this->success) {
            return $this->customResponse->is400Response($response, $this->responseMessage, $this->outputData);
        }

        return $this->customResponse->is200Response( $this->success, $this->responseMessage, $this->outputData);
    }

    public function createCustomer()
    {

        $this->responseMessage = "New Customer has been created successfully";
        $this->outputData = "aaa";
        $this->success = true;
        // return;

        echo "all";

       
    }


    // function go(Request $request, Response $response){

    // echo "all";
    // }
}
