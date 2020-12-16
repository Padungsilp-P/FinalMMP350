const UID = location.search.split('=')[1];
firebase.database().ref('users').child(UID).on('value', user => {
		if (typeof displayProfile === "function") 
			displayProfile(user.val().displayName, user.val());
	});

const updateb = document.getElementById('update');
const logoutb = document.getElementById('logout');
const userName = document.getElementById("username");

updateb.onclick = function(){
	// take the email and password and send it to firebase
    updateall();
    alert('Your profile is updated.');
    
};
function updateall(){
    fb.updateProfile(UID, 'displayName', userName.value);
}
function displayProfile(displayName, userInfo) {
    userName.value = displayName;
}

logoutb.onclick = function() {
	fb.logout();
	console.log("logging out");
};

function onError(errorMessage) {
	alert(errorMessage);
}

function noUser() {
	// remove the auth body
	document.body.classList.remove('auth');
}