// function formvalidate()
// {
// 	var uname = document.contact.name;
// 	var uemail = document.contact.email-address;
// 	var uaddinfo = document.contact.additional-info;
// 	{
// 		if(allLetter(uname))
// 	{
// 		if (ValidateEmail(uemail))
// 	}
// 	}
// 	return false;
// }

// function allLetter(uname)
// {
// 	var letters = /^[A-Za-z]+$/;
// 	if(uname.value.match(letters))
// 		{
// 			return true;
// 		}
// 		else
// 		{
// 			alert('Username must have alphabet characters only');
// 			uname.focus();
// 			return false;
// 		}
// }

// function ValidateEmail(uemail)
// {
// 	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// 	if(uemail.value.match(mailformat))
// 	{
// 		return true;
// 	}
// 	else
// 	{
// 		alert("You have entered and invalid email address!");
// 		uemail.focus();
// 		return false;
// 	}
// }

function validate()
{
	if ((document.contact.name.value==""))
	{
		alert("You must fill in your name.")
		return false
	}
	if ((document.contact.email_add.value=="")) 
	{
		alert("You must fill in your email")
		return false;

	}
	else
		return true

}
