<script src="./js/libraries/jquery.min.js"></script>
<script src="./js/libraries/moment.min.js"></script>
<script src="./js/libraries/bootstrap.min.js"></script>
<script src="./js/libraries/bootstrap-datepicker.min.js"></script>
<script src="./js/libraries/bootstrap-datetimepicker.min.js"></script>
<script src="./js/captcha.js"></script>
<?php
$url = explode('/', $_SERVER['SCRIPT_NAME']);
switch ($url[count($url) - 1]) {
    case 'index.php':
        echo '<script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>';
        echo '<script src="./js/index.js"></script>';
        break;
    case 'form.php':
        $params = [];

        if (isset($_GET['policyNumber'])) {
            $params['policyNumber'] = $_GET['policyNumber'];
        }

        if (isset($_GET['eventDate'])) {
            $params['eventDate'] = $_GET['eventDate'];
        }

        if (isset($params['policyNumber']) || isset($params['eventDate'])) {
            $paramsJson = json_encode($params);
            echo "<script> var getParams = $paramsJson </script>";
        }

        echo '<script src="./js/form.js"></script>';
        break;

    default:
}
?>
</body>
</html>