function validateName(x){
	var specialString = "0 1 2 3 4 5 6 7 8 9 ! @ # $ ^ & % * ( ) + [ ] \\ / { } | : < > ? , .";
	var specialArray = specialString.split(" ");
	var i = 0;
	var result = false;
	while(i < specialArray.length){
		if(x.includes(specialArray[i].trim()) == true){
			result = true;
		}
	i++;
	}
	return result;
}
	
function validateEmail(emailAddress){
	var result = false;
	var x = emailAddress.indexOf("@");
	var y = emailAddress.indexOf(".");
	if(x > 0 && y > 0 && (x + 1) !=  y){
			result = true;
		// returns true if email is valid
	}
	return result;
}

function validateNumber(x){
	var specialString = "! @ # $ ^ & % * ( ) [ ] \\ / { } | : < > ? , . a b c d e f g h i j k l m n o p q r s t u v w x y z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
	var specialArray = specialString.split(" ");
	var i = 0;
	var result = false;
	while(i < specialArray.length){
		if(x.includes(specialArray[i].trim()) == true){
			result = true;
		}
	i++;
	}
	return result;
}
	
  function post(){
	var name = $('#name').val();
	var email = $('#email').val();
	var mobile = $('#mobile').val();
	var msgtxt = $('#msgtxt').val();
	if(name == ""){
		$('#notification').html("<b>Alert:</b> Please enter your first name!");		
	}
	else if(validateName(name)){
		$('#notification').html("<b>Alert:</b> Please enter a valid name");		
	}
	else if(email == ""){
		$('#notification').html("<b>Alert:</b> Please enter your email address!");				
	}
	else if(!validateEmail(email)){
		$('#notification').html("<b>Alert:</b> Please enter a valid email!");						
	}	
	else if(validateNumber(mobile)){
		$('#notification').html("<b>Alert:</b> Please enter a valid number!");								
	}
	else if(msgtxt == ""){
		$('#notification').html("<b>Alert:</b> Please enter your message!");						
	}
	else{
		$('#notification').html("Your Message was now sent!");						
		$.post('post-msg.php',{postname:name,postemail:email,postmobile:mobile,postmsgtxt:msgtxt},
		function(data){
			$('#notification').html(data);
		});		
	}
}

