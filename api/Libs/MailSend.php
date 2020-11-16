<?php

include "PHPMailer/class.phpmailer.php";


class MailSend
{
	private $mailHeader;
	private $content;

	public function __construct ( $mailHeader, $content)
	{
		
		$this->mailHeader = $mailHeader;
		$this->content = $content;

 		return $this->handle ();
		
	}
	
	
	public function handle ()
	{

		$mail = new PHPMailer();

		$mail->SMTPDebug = 0;
		$mail->IsSMTP();                // tell the class to use SMTP
		$mail->SMTPAuth   = true;                  // enable SMTP authentication
		$mail->Port       = 465;                    // set the SMTP server port
		$mail->SMTPSecure = 'ssl';
		$mail->Host = 'smtp.gmail.com';
		$mail->Username = "siyahkarecontact@gmail.com";
		$mail->Password = 'YqU$EvM%5C!7y6';
		$mail->SetFrom("siyahkarecontact@gmail.com", "SiyahKare"); // Mail attigimizda yazacak isim
		$mail->AddAddress("siyahkarecontact@gmail.com"); // Maili gonderecegimiz kisi/ alici
		$mail->Subject = $this->mailHeader; // Konu basligi
		$mail->Body = $this->content; // Mailin icerigi
		$mail->IsHTML(true);
		$mail->CharSet  ="utf-8";




		if (!$mail->send ()) {

			echo $mail->ErrorInfo;
			return false;

		}else {

			return true;

		}
	}
	
}


?> 