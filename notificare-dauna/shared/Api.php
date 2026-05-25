<?php
require_once __ROOT__ . '/shared/Response.php';

class Api
{
    private $server;
    private $authKey;
    private $clientId;

    public function __construct($server, $authKey, $clientId)
    {
        $this->server = $server;
        $this->authKey = $authKey;
        $this->clientId = $clientId;
    }

//    private function callAPI($version = 2, $api, $method, $data = [], $type = 'POST')
//    {
//        $url = "https://$this->server/api/$version.0/$api/$method";
//        $header = "Content-type: application/x-www-form-urlencoded\r\n";
//        $header .= "AuthKey: $this->authKey\r\n";
//        $header .= "ClientId: $this->clientId\r\n";
//
//        $options = [
//            'http' => [
//                'header' => $header,
//                'method' => $type,
//                'content' => http_build_query($data)
//            ]
//        ];
//
//        $context = stream_context_create($options);
//        $result = file_get_contents($url, false, $context);
//
//        if ($result === false) {
//            new Response('Cloud call failed', false);
//        }
//
//        return $result;
//    }

    private function callAPI($version = 2, $api, $method, $data = [], $type = 'POST')
    {
        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, "https://$this->server/api/$version.0/$api/$method");
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            "AuthKey: $this->authKey",
            "ClientId: $this->clientId"
        ]);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

        $result = curl_exec($ch);

        curl_close($ch);

        if ($result === false) {
            new Response('Cloud call failed', false);
        }

        return $result;
    }
	
    private function callCoreService($controller, $action, $id, $data = [], $type = 'POST')
    {
        $ch = curl_init();
		
		$url = "https://$this->server/api/$controller";
		
		if (isset($action) && $action != '')
			$url .= "/".$action;

		if (isset($id) && $id != '')
			$url .= "/".$id;

        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            "AuthKey: $this->authKey",
            "ClientId: $this->clientId"
        ]);
		if ($type == 'POST')
		{
			curl_setopt($ch, CURLOPT_POST, 1);
			curl_setopt($ch, CURLOPT_POSTFIELDS, "=".$data['document']);
		}
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

        $result = curl_exec($ch);

        curl_close($ch);

        // if ($result === false) {
            // new Response('CORE Service call failed', false);
        // }

        return $result;
    }
	

    public function getCounties()
    {
//         $data = [
//            'database' => 'intaro',
//            'name' => 'JUDETE_ROMANIA'
//        ];

//        return $this->callAPI(1, 'nomenclator', 'get.php', $data);
     
        return $this->callCoreService('county', '', '', null, 'GET');
	}
	
	

    public function getLocalities($county)
    {
        // $data = [
            // 'name' => 'intaro',
            // 'name' => "LOCALITATI_$county"
        // ];

        // return $this->callAPI(1, 'nomenclator', 'get.php', $data);
		
		return $this->callCoreService('locality', 'county', $county, null, 'GET');
    }

    public function getBrands()
    {
        // $data = [
            // 'database' => 'auto',
            // 'name' => 'MARCI'
        // ];

        // return $this->callAPI(1, 'nomenclator', 'get.php', $data);

		return $this->callCoreService('autobrand', '', '', null, 'GET');
    }

    public function getModels($brand)
    {
        // $data = [
            // 'database' => 'auto',
            // 'name' => "MODELE_$brand"
        // ];

        // return $this->callAPI(1, 'nomenclator', 'get.php', $data);
		
		return $this->callCoreService('automodel', 'brand', $brand, null, 'GET');
    }
	
	public function getCountries()
    {
		return $this->callCoreService('country', '', '', null, 'GET');
    }

    public function getInsuranceCompanies()
    {
		return $this->callCoreService('insurancecompany?casco=true', '', '', null, 'GET');
    }

    public function setNotification($notification, $county)
    {
        $data = [
            'document' => json_encode($notification),
            'county' => $county,
            'merge' => true
        ];

        //return $this->callAPI(2, 'INTARO_DOCUMENT', 'create_from_file_web_return_serial', $data);
		return $this->callCoreService('rcaautoclaim', 'CreateFromNotification', '', $data, 'POST');
    }

    public function setNotificationEmail($notification)
    {
        $data = [
            'document' => json_encode($notification),
        ];

		return $this->callCoreService('rcaautoclaim', 'SendNotificationEmail', '', $data, 'POST');
    }
}