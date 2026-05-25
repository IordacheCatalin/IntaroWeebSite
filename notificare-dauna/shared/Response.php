<?php

class Response
{
    public function __construct($data, $status = true)
    {
        global $_config;

        if ($status) {
            header("HTTP/1.1 200 OK");
        } else {
            header('HTTP/1.1 500 Internal Server Error');
        }

        // if (!isset($_config['debug']) || !$_config['debug']){
            // if(!$status){
                // die;
            // }
        // }

        $response = [
            'status' => $status,
            'data' => $data
        ];

        echo json_encode($response);
        die;
    }
}