<?php
require_once __ROOT__ . '/shared/Api.php';
require_once __ROOT__ . '/shared/Response.php';
require_once __ROOT__ . '/shared/WsseAuthHeader.php';

//date_default_timezone_set('Europe/Bucharest');

class App
{
	
    private $api;

    public function __construct()
    {
        global $_config;
        $this->getConfig();

        if (!isset($_GET['request'])) {
            return false;
        }

        $this->api = new Api(
            $_config['server'],
            $_config['AuthKey'],
            $_config['clientId']
        );

        $this->processRequest($_GET['request']);
        return true;
    }

    private function getConfig()
    {
        try {
            global $_config;

            $stream = file_get_contents(__ROOT__ . '/config.json');
            $_config = (array)json_decode($stream);

            if (
				!isset($_config['server']) 
				|| !isset($_config['AuthKey'])
                || !isset($_config['clientId'])
				) {
                new Response('No config data', false);
            }
        } catch (Exception $err) {
            new Response('No config', false);
        }
    }

    private function processRequest($request)
    {
        switch ($request) {
            case 'getCountries':
                echo $this->getCountries();
                break;

			case 'getCounties':
                echo $this->getCounties();
                break;

            case 'getLocalities':
                $this->getLocalities();
                break;

            case 'getBrands':
                $this->getBrands();
                break;

            case 'getModels':
                $this->getModels();
                break;

            case 'getInsuranceCompanies':
                $this->getInsuranceCompanies();
                break;

            case 'checkPolicy':
                $this->checkPolicy();
                break;

            case 'sendNotification':
                $this->sendNotification();
                break;

            case 'nextPageForm':
                $this->nextPageForm();
                break;

            case 'checkDecontare':
                $this->checkDecontare();
                break;
				
            case 'sendNotificationEmail':
                $this->sendNotificationEmail();
                break;				

            default:
                header("HTTP/1.1 404 Not Found");
                echo '404 Not Found';
                die;
        }
    }

    private function parseRequestKeys($postFields)
    {
        $data = [];

        foreach ($postFields as $kField => $vField) {
            if ($vField === "") {
                continue;
            }

            $keyArray = explode('/', $kField);

            if (empty($keyArray)) {
                continue;
            }

            // Init pointer
            $pointer = &$data;

            foreach ($keyArray as $key) {
                // Create array if not found
                if (!isset($pointer[$key])) {
                    $pointer[$key] = [];
                }

                $pointer = &$pointer[$key];
            }

            $pointer = $vField;
        }

        return $data;
    }

    private function convertObjectToArray(&$object)
    {
        $array = [];

        if (!is_array($object)) {
            return false;
        }

        foreach ($object as $element) {
            array_push($array, $element);
        }

        $object = $array;

        return true;
    }

    private function convertCounty($county)
    {
        switch ($county) {
            case "ALBA":
                return 'AB';
                break;
            case "ARAD":
                return 'AR';
                break;
            case "ARGES":
                return 'AG';
                break;
            case "BACAU":
                return 'BC';
                break;
            case "BIHOR":
                return 'BH';
                break;
            case "BISTRITA-NASAUD":
                return 'BN';
                break;
            case "BOTOSANI":
                return 'BT';
                break;
            case "BRAILA":
                return 'BR';
                break;
            case "BRASOV":
                return 'BV';
                break;
            case "BUCURESTI":
                return 'B';
                break;
            case "BUZAU":
                return 'BZ';
                break;
            case "CALARASI":
                return 'CL';
                break;
            case "CARAS-SEVERIN":
                return 'CS';
                break;
            case "CLUJ":
                return 'CJ';
                break;
            case "CONSTANTA":
                return 'CT';
                break;
            case "COVASNA":
                return 'CV';
                break;
            case "DIMBOVITA":
                return 'DB';
                break;
            case "DOLJ":
                return 'DJ';
                break;
            case "GALATI":
                return 'GL';
                break;
            case "GIURGIU":
                return 'GR';
                break;
            case "GORJ":
                return 'GJ';
                break;
            case "HUNEDOARA":
                return 'HD';
                break;
            case "HARGHITA":
                return 'HR';
                break;
            case "IALOMITA":
                return 'IL';
                break;
            case "IASI":
                return 'IS';
                break;
            case "ILFOV":
                return 'IF';
                break;
            case "MARAMURES":
                return 'MM';
                break;
            case "MEHEDINTI":
                return 'MH';
                break;
            case "MURES":
                return 'MS';
                break;
            case "NEAMT":
                return 'NT';
                break;
            case "OLT":
                return 'OT';
                break;
            case "PRAHOVA":
                return 'PH';
                break;
            case "SALAJ":
                return 'SJ';
                break;
            case "SATU-MARE":
                return 'SM';
                break;
            case "SIBIU":
                return 'SB';
                break;
            case "SUCEAVA":
                return 'SV';
                break;
            case "TELEORMAN":
                return 'TR';
                break;
            case "TIMIS":
                return 'TM';
                break;
            case "TULCEA":
                return 'TL';
                break;
            case "VASLUI":
                return 'VS';
                break;
            case "VILCEA":
                return 'VL';
                break;
            case "VRANCEA":
                return 'VN';
                break;
        }
        return false;
    }

    private function generateCompletedStepsArray($completedSteps)
    {
        $finalArray = [];

        for ($i = 0; $i < 11; $i++) {
            if (in_array($i, $completedSteps)) {
                $finalArray[$i] = true;
            } else {
                $finalArray[$i] = false;
            }
        }

        return json_encode($finalArray);
    }

    private function postCaptcha($user_response)
    {
        global $_config;

        $fields_string = '';
        $fields = array(
            'secret' => $_config['captchaSecret'],
            'response' => $user_response
        );
        foreach ($fields as $key => $value)
            $fields_string .= $key . '=' . $value . '&';
        $fields_string = rtrim($fields_string, '&');

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, 'https://www.google.com/recaptcha/api/siteverify');
        curl_setopt($ch, CURLOPT_POST, count($fields));
        curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, True);

        $result = curl_exec($ch);
        curl_close($ch);

        return json_decode($result, true);
    }

    private function getUrl()
    {
        $url = $_SERVER['REQUEST_URI'];
        $split = explode('/', $url);

        array_pop($split);
        array_push($split, 'form.php');

        $url = implode('/', $split);

        // Add params
        $dateTime = new DateTime($_POST['dateTime']);
        $url .= '?policyNumber=' . $_POST['policyNumber'];
        $url .= '&eventDate=' . $dateTime->format(DateTime::ATOM);;

        return $_SERVER['HTTP_ORIGIN'] . $url;
    }

    private function getUrlCaptcha()
    {
        $url = $_SERVER['REQUEST_URI'];
        $split = explode('/', $url);

        array_pop($split);
        array_push($split, 'index.php');

        $url = implode('/', $split);

        // Add params
        $url .= '?captcha=false';

        return $_SERVER['HTTP_ORIGIN'] . $url;
    }

    private function checkPolicyAPI($policyNumber)
    {
        $username = 'cloud_ws';
        $password = 'D83D3815-E935';
        $wsdl = 'https://portal.watford.ro/ws/WFDocumentService.svc?wsdl';
//        $username = 'admin';
//        $password = 'qwe123!@#';
//        $wsdl = 'https://89.238.212.19/WFWs/WFDocumentService.svc?wsdl';

        $wsse_header = new WsseAuthHeader($username, $password);

        $connOptions = array(
            'cache_wsdl' => 0,
            'exceptions' => true,
            "trace" => true,
            'stream_context' => stream_context_create([
                'ssl' => [
                    'allow_self_signed' => true,
                    'verify_peer' => false,
                    'verify_peer_name' => false,
                ],
                'http' => array(
                    'header' => "Content-Type: application/soap+xml; charset=utf-8;"
                ),
            ]),
        );
        $client = new SoapClient($wsdl, $connOptions);
        $client->__setSoapHeaders(array($wsse_header));

        $request = array(
            "request" => array(
                "CodProdus" => 'RCA',
                "NumarPolita" => $policyNumber
            )
        );

        try {
            $results = $client->GetInfoPolita($request);

            $arr = json_decode(json_encode($results->GetInfoPolitaResult), true);

            if (isset($arr['MesajEroare'])) {
                return false;
            }

            $finalResult = [
                'dataEmitere' => $arr['DataEmitere'],
                'dataStart' => $arr['DataStart'],
                'dataStop' => $arr['DataStop'],
            ];

            return $finalResult;
        } catch (SoapFault $e) {
//            echo '<pre>';
//            echo $e;
//            echo '</pre>';

            return false;
        }
    }

    public function checkDecontare()
    {
        $policyNumber = $_POST['policyNumber'];

        if(!isset($_POST['policyNumber'])){
            new Response('Invalid param', false);
        }

        $username = 'cloud_ws';
        $password = 'D83D3815-E935';
        $wsdl = 'https://portal.watford.ro/ws/WFDocumentService.svc?wsdl';
//        $username = 'admin';
//        $password = 'qwe123!@#';
//        $wsdl = 'https://89.238.212.19/WFWs/WFDocumentService.svc?wsdl';

        $wsse_header = new WsseAuthHeader($username, $password);

        $connOptions = array(
            'cache_wsdl' => 0,
            'exceptions' => true,
            "trace" => true,
            'stream_context' => stream_context_create([
                'ssl' => [
                    'allow_self_signed' => true,
                    'verify_peer' => false,
                    'verify_peer_name' => false,
                ],
                'http' => array(
                    'header' => "Content-Type: application/soap+xml; charset=utf-8;"
                ),
            ]),
        );
        $client = new SoapClient($wsdl, $connOptions);
        $client->__setSoapHeaders(array($wsse_header));

        $request = array(
            "request" => array(
                "CodProdus" => 'RCA',
                "NumarPolita" => $policyNumber
            )
        );

        try {
            $results = $client->GetInfoPolita($request);

            $arr = json_decode(json_encode($results->GetInfoPolitaResult), true);

            if (isset($arr['MesajEroare'])) {
                new Response($arr['MesajEroare'], false);
            }

            new Response($arr['DecontareDirecta']);

        } catch (SoapFault $e) {
            new Response('Error', false);
        }
    }

    public function getCountries()
    {
        $get = $this->api->getCountries();
        $ret = (array)json_decode($get);

        new Response($ret);
    }
	
    public function getCounties()
    {
        $get = $this->api->getCounties();
        $ret = (array)json_decode($get);

        new Response($ret);
    }

    public function getLocalities()
    {
        $county = $_POST['county'];
        $get = $this->api->getLocalities($county);
        $ret = (array)json_decode($get);

        new Response($ret);
    }

    public function getBrands()
    {
        $get = $this->api->getBrands();
        $ret = (array)json_decode($get);

        new Response($ret);
    }

    public function getModels()
    {
        $brand = $_POST['brand'];
        $get = $this->api->getModels($brand);
        $ret = (array)json_decode($get);

        new Response($ret);
    }
	
	public function getInsuranceCompanies()
    {
        $get = $this->api->getInsuranceCompanies();
        $ret = (array)json_decode($get);

        new Response($ret);
    }

    public function checkPolicy()
    {
        if (!isset($_POST['policyNumber'])
            || !isset($_POST['eventDate'])
            || empty($_POST['policyNumber'])
            || empty($_POST['eventDate'])) {
            new Response('Trebuie completate numarul de polita si data si ora producerii evenimentului.');
        }

        $policy = $_POST['policyNumber'];
        $eventDate = $_POST['eventDate'];
		$ret = $eventDate;

        $policyCheckApi = $this->checkPolicyAPI($policy);

        if (!$policyCheckApi) {
            new Response('Numarul de polita nu este valid.');
        }

        $startDate = new DateTime($policyCheckApi['dataStart']);
        $endDate = new DateTime($policyCheckApi['dataStop']);
        $eventDate = new DateTime($eventDate);		

        if ($eventDate < $startDate
            || $eventDate > $endDate->modify('+1 day')) {
            new Response('Data producerii evenimentului nu este valida.');
        }

        new Response(true);
    }

    public function sendNotificationEmail()
    {
        $postData = $_POST;
		
        $notification = $this->parseRequestKeys($postData);

        $this->api->setNotificationEmail($notification);
    }
	
	public function sendNotification()
    {
        $postData = $_POST;
		
        $notification = $this->parseRequestKeys($postData);
		
        // Change data types
        if (isset($notification['event_information']['car_damage_parts'])) {
            $this->convertObjectToArray($notification['event_information']['car_damage_parts']);
        }

        if (isset($notification['event_information']['injured_persons']['dead'])) {
            $this->convertObjectToArray($notification['event_information']['injured_persons']['dead']);
        }

        if (isset($notification['event_information']['injured_persons']['injured'])) {
            $this->convertObjectToArray($notification['event_information']['injured_persons']['injured']);
        }

        if (isset($notification['event_information']['injured_persons']['number_dead_persons'])) {
            $notification['event_information']['injured_persons']['number_dead_persons'] = (int)$notification['event_information']['injured_persons']['number_dead_persons'];
        }

        if (isset($notification['event_information']['injured_persons']['number_injured_persons'])) {
            $notification['event_information']['injured_persons']['number_injured_persons'] = (int)$notification['event_information']['injured_persons']['number_injured_persons'];
        }

        if (isset($notification['event_information']['injured_persons']['declaration'])) {
            $notification['event_information']['injured_persons']['declaration'] = $notification['event_information']['injured_persons']['declaration'] === 'true' ? true : false;
        }
        //////////////////////

        $notification['status'] = 'NEW';
		$initial = '';

        if (isset($notification['constat_meeting_details']['county'])) {
            $initial = $this->convertCounty($notification['constat_meeting_details']['county']);
        } else {
			//outside of country
            //new Response('No constat_meeting_details.county', false);
        }

        if (isset($notification['completedSteps'])) {
            $notification['completedSteps'] = $this->generateCompletedStepsArray($notification['completedSteps']);
        } else {
            new Response('No completedSteps', false);
        }

        $ins = $this->api->setNotification($notification, $initial);

        $response = json_decode($ins, true);

        if($response['status'] === 'OK'){
            new Response($response['result']);
        }
		else
		if($response['status'] === 'ERROR_MSG'){
            new Response("Eroare la inregistrarea notificarii!\n\n".$response['result'], false);
        }		

        new Response('Eroare la inregistrarea notificarii!', false);
    }

    public function nextPageForm()
    {
        if (!isset($_POST['policyNumber']) || !isset($_POST['dateTime'])) {
            header('HTTP/1.1 500 Internal Server Error');
            die;
        }

        $res = $this->postCaptcha($_POST['g-recaptcha-response']);

        // if (!$res['success']) {
            // header('Location: ' . $this->getUrlCaptcha());
            // die;
        // } else {
            header('Location: ' . $this->getUrl());
            die;
        // }
    }
}

$app = new App;
