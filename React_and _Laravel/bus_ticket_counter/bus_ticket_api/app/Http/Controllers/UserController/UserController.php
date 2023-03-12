<?php

namespace App\Http\Controllers\UserController;

use App\Models\User;

use Illuminate\Support\Facades\Hash;
use App\Requests\CustomRequestHandler;
use Psr\Http\Message\RequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
class UserController
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
        $this->params = CustomRequestHandler::getAllParams($request);
        $action = isset($this->params->action) ? $this->params->action : "";
        switch ($action) {

            case 'createCustomer':
                $this->createCustomer($request, $response);
                break;

            default:
                $this->responseMessage = "Invalid request!";
                return $this->customResponse->is400Response($response, $this->responseMessage);
                break;
        }

        if (!$this->success) {
            return $this->customResponse->is400Response($response, $this->responseMessage, $this->outputData);
        }

        return $this->customResponse->is200Response($response, $this->responseMessage, $this->outputData);
    }

    public function createCustomer(Request $request)
    {

        $this->responseMessage = "New Customer has been created successfully";
        $this->outputData = "aaa";
        $this->success = true;
    }
}
