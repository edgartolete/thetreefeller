<?php
	$name = $_POST['postname'];
	$email = $_POST['postemail'];
	$mobile = $_POST['postmobile'];
	$msgtxt = $_POST['postmsgtxt'];
	
	
	$mailsbj = 'Website New Message';
	$mailmsg = 'You have a new message from edgartolete.com!'
	.'<br> First Name: '.$name
	.'<br> Email: '.$email
	.'<br> Mobile: '.$mobile
	.'<br> Message: '.$msgtxt;
	
	$mailhdr = "From: ".$name." <".$email.">\r\n";
	$mailhdr .= "Reply-To: ".$email."\r\n";
	$mailhdr .= "Content-type: text/html\r\n";
	
	mail('edgartolete@outlook.com', $mailsbj, $mailmsg, $mailhdr);
	
	echo "Your message was now sent!";
	
?>