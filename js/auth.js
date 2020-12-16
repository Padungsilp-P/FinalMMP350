const loginb = document.getElementById('login');
const email = document.getElementById('email');
const password = document.getElementById('password');

loginb.onclick = function() {
	fb.login(email.value, password.value);
};

function userLoggedIn(uid, displayName) {
	document.body.classList.add('auth');
}

function onError(errorMessage) {
	alert(errorMessage);
}

function noUser() {
	// remove the auth body
	document.body.classList.remove('auth');
}