const UID = location.search.split('=')[1];
firebase.database().ref('users').child(UID).on('value', user => {
		if (typeof displayProfile === "function") 
			displayProfile(user.val().displayName, user.val());
	});

const updateb = document.getElementById('update');
const bio = document.getElementById('bio');
const logoutb = document.getElementById('logout');
const userName = document.getElementById("username");
const img = document.getElementById("profile-image");
const chooseimg = document.getElementById("image");
const submitimg = document.getElementById("submit-image");

updateb.onclick = function(){
	// take the email and password and send it to firebase
    updateall();
    alert('Your profile is updated.');
    
};
function updateall(){
    fb.updateProfile(UID, 'displayName', userName.value);
    fb.updateProfile(UID, 'Bio', bio.value);
}
function displayProfile(displayName, userInfo) {
    userName.value = displayName;
    if (userInfo.Bio) {
		bio.value = userInfo.Bio;
	}
    if (userInfo.imageURL) {
		img.src = userInfo.imageURL;
	}

}

logoutb.onclick = function() {
	fb.logout();
	console.log("logging out");
};

function onError(errorMessage) {
	alert(errorMessage);
}

submitimg.onclick = function() {

	const file = chooseimg.files[0];

	if (file) {
		fb.uploadImage(file, UID, 'profile-image')
			.then(addProfileImage);
	}
    
};

function addProfileImage(imageURL) {
	img.src = imageURL;
	fb.updateProfile(UID, 'imageURL', imageURL);
}