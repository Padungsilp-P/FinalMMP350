const signup = document.getElementById('signup');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

signup.onclick = function(){
	// take the email and password and send it to firebase
    if(password.value!=cpassword.value){
        fb.onError('Password and confirm password do not match.');
    }
    else{
       fb.create(username.value, email.value, password.value);
    }
};

function onError(errorMessage) {
	alert(errorMessage);
}
