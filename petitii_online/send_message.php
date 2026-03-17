<?php
   header( "refresh:20;url=https://www.axeria-iard.ro" );
   use PHPMailer\PHPMailer\PHPMailer;
   use PHPMailer\PHPMailer\Exception;
   use PHPMailer\PHPMailer\SMTP;

   require 'PHPMailer/src/Exception.php';
   require 'PHPMailer/src/PHPMailer.php';
   require 'PHPMailer/src/SMTP.php';

   $msg_sent = false;
   if(isset($_POST['send'])) 
   {
	    //Create an instance; passing `true` enables exceptions
		$mail = new PHPMailer(true);

		try {
			//Server settings
			//$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
			$mail->isSMTP();                                            //Send using SMTP
			$mail->Host       = 'axeria-iard.ro';                     //Set the SMTP server to send through
			$mail->SMTPAuth   = true;                                   //Enable SMTP authentication
			$mail->Username   = 'webmaster@axeria-iard.ro';                     //SMTP username
			$mail->Password   = '@(;VK:D,8qBvArN\\';                               //SMTP password
			$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
			$mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

			//Recipients
			$mail->setFrom('webmaster@axeria-iard.ro', 'Axeria Iard Mailer');
			$mail->addAddress('administrare@axeria-iard.ro', 'Axeria');     //Add a recipient
			// $mail->addReplyTo('info@example.com', 'Information');
			// $mail->addCC('cc@example.com');
			$mail->addBCC('cezar.dogaru@intaro.ro');

			//Attachments
			// $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
			// $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

			// the message
			$msg = "Buna ziua,<br /><br />";
			$msg .= "A fost receptionat un mesaj trimis de pe site-ul axeria-iard.ro!<br /><br />";
			$msg .= "<ul><li>Nume: <strong>" . $_POST['your-last-name']."</strong></li>";
			$msg .= "<li>Prenume: <strong>" . $_POST['your-first-name']."</strong></li>";
			$msg .= "<li>Email: <strong>" . $_POST['your-email']."</strong></li>";
			$msg .= "<li>Telefon: <strong>" . $_POST['your-phone']."</strong></li>";
			$msg .= "<li>Mesaj: <br /><strong>" .str_replace("\r\n","<br />",$_POST['your-message'])."</strong></li></ul><br />";
			$msg .= "<em>Va rugam sa raspundeti mesajului folosind informatiile de contact furnizate in acest email.</em>";
			$msg .= "<br /><br />Cu stima!";

			//Content
			$mail->isHTML(true);                                  //Set email format to HTML
			$mail->Subject = 'Relatii client --- mesaj nou';
			$mail->Body    = $msg;
			$mail->AltBody = $msg;

			$mail->send();
			$msg_sent = true;
		} catch (Exception $e) {
			echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
		}
		
		if ($msg_sent)
		{
?>
<link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>

<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="text-center">
                <h1>
                    Mesajul dvs a fost transmis cu succes!</h1>
				<hr />
                <div class="details">
					Va vom raspunde in cel mai scurt timp!
					<hr />
					Multumim!
					<hr />
                    Veti fi redirectionat catre pagina principala!
                </div>
				<br />
				<br />
                <div class="error-actions">
                    <a href="https://www.axeria-iard.ro" class="btn btn-primary btn-lg"><span class="glyphicon glyphicon-phone"></span>
                        Inapoi la site </a>
                </div>
            </div>
        </div>
    </div>
</div>
<?php
		}

   }
   
   if (!$msg_sent)
   {
	   ?>
<link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>

<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="text-center error-template">
                <h1>
                    Oops!</h1>
                <div class="error-details">
                    Ne cerem scuze dar a aparut o eroare la procesarea cererii dvs!
					<hr />
					Va rugam sa ne contactati prin intermediul call-center-ului!
					<hr />
                    Veti fi redirectionat catre pagina principala!
                </div>
				<br />
				<br />
                <div class="error-actions">
                    <a href="https://www.axeria-iard.ro" class="btn btn-primary btn-lg"><span class="glyphicon glyphicon-phone"></span>
                        Inapoi la site </a>
                </div>
            </div>
        </div>
    </div>
</div>
	   <?php
   }
?>

