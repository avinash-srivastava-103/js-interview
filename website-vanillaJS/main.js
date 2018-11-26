/*
First round was machine coding, with pure javascript.
They  gave 2 API and using it we had to develop a site (product and its review),
also you should be able to append your own reviews in that list.
They gave 2 hours to complete it.
*/
const app = document.getElementById('main');
const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

function serviceCalls(type, url) {
	return new Promise(function(resolve, reject) {
		const xhrRequest = new XMLHttpRequest();
		xhrRequest.open(type, url, true);
		xhrRequest.onload = function () {
			resolve(xhrRequest.responseText);
		};
		xhrRequest.onerror = function() {
			reject(xhrRequest.statusText);
		};
		xhrRequest.send();
	});	
}
function init() {
	serviceCalls('GET', 'https://ghibliapi.herokuapp.com/films').then(function(res) {
		console.log(res);
		JSON.parse(res).forEach(movie => {
			
			const card = document.createElement('div');
			card.setAttribute('class', 'card');
			
			const h1 = document.createElement('h1');
			h1.textContent = movie.title;
			
			const p = document.createElement('p');
			movie.description = movie.description.substring(0, 300);
			p.textContent = `${movie.description}...`;
			
			const inputBox = document.createElement('textarea');
			inputBox.setAttribute('class', 'editText');
			inputBox.cols = 51;
			inputBox.rows = 14;

			const saveButton = document.createElement('button');
			saveButton.setAttribute('class', 'button-save');
			saveButton.innerHTML = 'Save';

			const editButton = document.createElement('button');
			editButton.setAttribute('class', 'button-edit');
			editButton.innerHTML = 'Edit';

			container.appendChild(card);
			card.appendChild(h1);
			card.appendChild(p);
			card.appendChild(editButton);
			

			editButton.onclick = function() {
				inputBox.value = p.textContent;
				card.removeChild(p);
				card.appendChild(inputBox);
				card.appendChild(saveButton);
				card.removeChild(editButton);
			};
			saveButton.onclick = function() {
				p.textContent = inputBox.value;
				card.appendChild(p);
				card.removeChild(inputBox);
				card.removeChild(saveButton);
				card.appendChild(editButton);
			}
		});
	}).catch(function(err) {
		console.log(err);
	});
}
init();
