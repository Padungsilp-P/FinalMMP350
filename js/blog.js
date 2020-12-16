const acc = document.getElementById('accountID');

const postb = document.getElementById('submit');
const posttext = document.getElementById('textcomment');

function userLoggedIn(uid, displayName) {
    acc.href = "account.html?uid=" + uid;
}

function onError(errorMessage) {
	alert(errorMessage);
}

function noUser() {
	// remove the auth body
	document.body.classList.remove('auth');
}

// if the person presses enter, publish the post
/*posttext.addEventListener('keyup', function(event) {
	if (event.which == 13) {
		publishPost();
	}
});*/

// if the person clicks the button, publish the post
postb.addEventListener('click', publishPost);

function publishPost() {
	const uid = fb.getUID();
	fb.publishPost(uid, posttext.value);
	posttext.value = ""; // reset textarea
}

const posts = document.getElementById('posts');

function createPost(postData, userInfo, postId) {

	// container of invidual post
	const post = js.createEl('div', 'post');
    const br = document.createElement('br');
	
	// display posts in reverse chronological order
	/*posts.insertBefore(post, posts.firstElementChild);
    posts.insertBefore(br, posts.firstElementChild);*/
	// if you want posts in chronological, display it this way:
	// 
	
    const img = js.createEl('img', 'accimg');
    if (userInfo.imageURL) {
		img.src = userInfo.imageURL;
	}
    else{
        img.src = "img/default.png";
    }
	const text = js.createEl('p', 'textcontent', postData.text);
	const info = js.createEl('div', 'info');
	const author = js.createEl('h3', 'infoname', "by " + userInfo.displayName);
	const d = new Date(postData.date);
	const realDate = js.formatDate(d)
	// (d.getMonth()+1) + '/' + d.getDate() +'/'+ d.getFullYear();
	const date = js.createEl('h3', 'date', " on " + realDate);

	info.appendChild(author);
	info.appendChild(date);
	
    post.appendChild(img);
	post.appendChild(info);
    post.appendChild(text);
    posts.appendChild(post);
}