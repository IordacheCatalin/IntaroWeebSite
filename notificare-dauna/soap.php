<?php

class WsseAuthHeader extends SoapHeader
{
    private $wss_ns = 'http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd';

    function __construct($user, $pass, $ns = null)
    {
        if ($ns) {
            $this->wss_ns = $ns;
        }

        $auth = new stdClass();
        $auth->Username = new SoapVar($user, XSD_STRING, NULL, $this->wss_ns, NULL, $this->wss_ns);
        $auth->Password = new SoapVar($pass, XSD_STRING, NULL, $this->wss_ns, NULL, $this->wss_ns);

        $username_token = new stdClass();
        $username_token->UsernameToken = new SoapVar($auth, SOAP_ENC_OBJECT, NULL, $this->wss_ns, 'UsernameToken', $this->wss_ns);

        $security_sv = new SoapVar(
            new SoapVar($username_token, SOAP_ENC_OBJECT, NULL, $this->wss_ns, 'UsernameToken', $this->wss_ns),
            SOAP_ENC_OBJECT, NULL, $this->wss_ns, 'Security', $this->wss_ns
        );
        parent::__construct($this->wss_ns, 'Security', $security_sv, true);
    }

}

$username = 'cloud_ws';
        $password = 'D83D3815-E935';
        $wsdl = 'https://portal.watford.ro/ws/WFDocumentService.svc?wsdl';
//        $username = 'admin';
//        $password = 'qwe123!@#';
//        $wsdl = 'https://89.238.212.19/WFWs/WFDocumentService.svc?wsdl';
echo "0&nbsp&nbsp";
echo "The time is " . date("h:i:sa") . "<br>";
        $wsse_header = new WsseAuthHeader($username, $password);
echo "1";
echo "The time is " . date("h:i:sa");
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
echo "2";
echo "The time is " . date("h:i:sa");
        $client = new SoapClient($wsdl, $connOptions);
        $client->__setSoapHeaders(array($wsse_header));


echo "3";
echo "The time is " . date("h:i:sa");
        $request = array(
            "request" => array(
                "CodProdus" => 'RCA',
                "NumarPolita" => '000212345'
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
			
			print_r($finalResult);

            return $finalResult;
        } catch (SoapFault $e) {
//            echo '<pre>';
//            echo $e;
//            echo '</pre>';

            return false;
        }
?>