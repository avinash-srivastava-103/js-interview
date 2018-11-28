var mainBody = document.getElementById('main');
var container = document.createElement('div');
container.setAttribute('class', 'container');

function makeCall(type, url) {
	return new Promise(function(resolve, reject) {
		var xhrRequest = new XHRHttpRequest();
		xhr.open(type, url, true);
		xhrRequest.onload = function() {
			resolve(xhrRequest.responsetext);
		};
		xhrRequest.onerror = function() {
			reject(xhrRequest.statustext);
		};
		xhrRequest.send();
	})
}
function elements() {
	const p = document.createElement('p');
	p.setAttribute("class", "textContainer");
	// p.textcontent = 

	const h1 = document.createElement('h1');
	p.setAttribute("class", "heading1");

	const editButton = document.createElement('button');
	editButton.setAttribute("class", "editButton");
	editButton.innerHTML = 'Edit';

	const saveButton = document.createElement('button');
	saveButton.setAttribute("class", "saveButton");
	saveButton.innerHTML = "Save";


	const rightButton = document.createElement('button');
	saveButton.setAttribute("class", "rightButton");
	saveButton.innerHTML = ">";
	
	const leftButton = document.createElement('button');
	leftButton.setAttribute("class", "leftButton");
	leftButton.innerHTML = "<";

	const card = document.createElement("div");
	card.setAttribute("class", "card");
}
init() {
	make
}