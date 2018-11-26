var body = document.getElementById('main');

function makeCall(type, url) {
	return new Promise(function(resolve, reject) {
		var xhr = new XLMHttpRequest();
		xhr.open(type, url, true);
		xhr.onload = function() {
			resolve(xhr.responseText);
		};
		xhr.onerror = function() {
			reject(xhr.statuserror);
		};
	})
}