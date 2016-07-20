<?php

/* =====================================================
 * change this to the email you want the form to send to
 * ===================================================== */
$email_to = "nirmalengineers1@gmail.com"; 
$email_from = "nirmalengineers1@gmail.com"; // must be different than $email_from 
$email_subject = "nirmalengineers.in (Website Client)";

if(isset($_POST['email']))
{

    function return_error($error)
    {
        echo json_encode(array('success'=>0, 'message'=>$error));
        echo "Please Try Again.. Check your detail.";
        die();
    }

    // check for empty required fields
    

    // form field values
    $name = $_POST['name']; // required
    $city = $_POST['city'];
    $email = $_POST['email']; // required
    $message = $_POST['message']; // required
    $number = $_POST['number'];

    // form validation
    $error_message = "";

    // name
    $name_exp = "/^[a-z0-9 .\-]+$/i";
    if (!preg_match($name_exp,$name))
    {
        $this_error = 'Please enter a valid name.';
        $error_message .= ($error_message == "") ? $this_error : "<br/>".$this_error;
    }        

    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
    if (!preg_match($email_exp,$email))
    {
        $this_error = 'Please enter a valid email address.';
        $error_message .= ($error_message == "") ? $this_error : "<br/>".$this_error;
    } 

    // if there are validation errors
    if(strlen($error_message) > 0)
    {
        return_error($error_message);
    }

    // prepare email message
    $email_message = "Website Mail Form details below.\n\n";

    function clean_string($string)
    {
        $bad = array("content-type", "bcc:", "to:", "cc:", "href");
        return str_replace($bad, "", $string);
    }

    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($email)."\n";
    $email_message .= "City: ".clean_string($city)."\n";
    $email_message .= "Contact: ".clean_string($number)."\n";
    $email_message .= "Message: ".clean_string($message)."\n";

    // create email headers
    $headers = 'From: '.$email_from."\r\n".
    'Reply-To: '.$email."\r\n" .
    'X-Mailer: PHP/' . phpversion();
    if (@mail($email_to, $email_subject, $email_message, $headers))
    {
        header('Location:http://nirmalengineers.in/php/success.html');
        echo json_encode(array('success'=>1, 'message'=>'Form submitted successfully.')); 
        echo "helo";

    }

    else 
    {
        header('Location:http://nirmalengineers.in/php/Unsuccess.html');
        echo json_encode(array('success'=>0, 'message'=>'An error occured. Please try again later.'));

                
    }
}
else
{
    echo 'Please fill in all required fields.';
    die();
}
?>