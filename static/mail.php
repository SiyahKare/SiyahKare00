<?php

header('Content-Type: application/json');
require ('Libs/Validation.php');
require ('Libs/MailSend.php');



$validation = new Validation();
$method = $_SERVER['REQUEST_METHOD'];
$url    = $_SERVER['PHP_SELF'];
$path = explode("mail.php",$url)[1];
$page = $_GET['page'];
if ($method =='POST')
{
    switch ($page)
    {
        case 'get-offer':

            $email       = htmlentities( $_POST['email']);
            $nameSurname = htmlentities( $_POST['name_surname']);
            $firmName    = htmlentities( $_POST['firm_name']);
            $phone       = htmlentities( $_POST['phone']);
            $service     = htmlentities( $_POST['service']);
            $message     = htmlentities( $_POST['message']);

            $val = new Validation();
            if (!$validation->is_email($email))
            {
                echo json_encode(["error"=>["Geçersiz mail adresi"],"status"=>false]);
                break;

            }
            $val->name('Ad Soyad (name_surname)')->value($nameSurname)->required();
            $val->name('Firma adı (firm_name)')->value($firmName);
            $val->name('Telefon (phone)')->value($phone)->pattern('tel')->required();
            $val->name('Hizmetler (service)')->value($service)->pattern('int')->required();


            $servicesArray =  [
                                    1 =>"Tanıtım Filmi",
                                    2 =>"Reklam Filmi",
                                    3 => "Kurumsal Video Çözümleri",
                                    4 => "Animasyon",
                                    5 => "Etkinlik",
                                    6 => "Diğer"
                                ];

            if(!$val->isSuccess())
            {
                echo json_encode(["error"=>$val->getErrors(),"status"=>false]);
                break;
            }

            if(!$servicesArray[$service])
            {

                echo json_encode(["error"=>"Geçersiz hizmet seçimi"]);

            }
            $sendMessage = "";
            $sendMessage .= "Adı Soyad        : ".$nameSurname.'<br>';
            $sendMessage .= "E-Mail Adresi    : ".$email.'<br>';
            $sendMessage .= "Telefon Numarası : ".$phone.'<br>';
            $sendMessage .= "Firma Adı        : ".$firmName.'<br>';
            $sendMessage .= "Sevisi           : ".$servicesArray[$service].'<br>';
            $sendMessage .= "Mesaj            : ".$message.'<br>';
            $mail= new MailSend("Teklif Al",$sendMessage);
            if (!$mail)
            {
                echo json_encode(["error"=>["Bir Hata Oluştu"],"status"=>false]);
                break;
            }
            else
            {
                echo json_encode(["error"=>["İletiniz başarı ile gönderildi."],"status"=>true]);
                break;
            }

        break;



        case 'contact':

            $email       = htmlentities( $_POST['email']);
            $nameSurname = htmlentities( $_POST['name_surname']);
            $firmName    = htmlentities( $_POST['firm_name']);
            $phone       = htmlentities( $_POST['phone']);
            $message     = htmlentities( $_POST['message']);

            $val = new Validation();

            if (!$validation->is_email($email))
            {
                echo json_encode(["error"=>["Geçersiz mail adresi"],"status"=>false]);
                break;

            }

            $val->name('Ad Soyad (name_surname)')->value($nameSurname)->required();
            $val->name('Firma adı (firm_name)')->value($firmName);
            $val->name('Telefon (phone)')->value($phone)->pattern('tel')->required();
            $val->name('Mesaj (message)')->value($message)->required();

            if(!$val->isSuccess())
            {
                echo json_encode(["error"=>$val->getErrors(),"status"=>false]);
                break;
            }

            $sendMessage = "";
            $sendMessage .= "Adı Soyad        : ".$nameSurname.'<br>';
            $sendMessage .= "E-Mail Adresi    : ".$email.'<br>';
            $sendMessage .= "Telefon Numarası : ".$phone.'<br>';
            $sendMessage .= "Firma Adı        : ".$firmName.'<br>';
            $sendMessage .= "Mesaj            : ".$message.'<br>';
            $mail         = new MailSend("İletişim",$sendMessage);
            if (!$mail)
            {
                echo json_encode(["error"=>["Bir Hata Oluştu"],"status"=>false]);
                break;
            }
            else
            {
                echo json_encode(["error"=>["İletiniz başarı ile gönderildi."],"status"=>true]);
                break;
            }
            break;
    }

}

