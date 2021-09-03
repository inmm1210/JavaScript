var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

// Set up our HTTP request
var xhr = new XMLHttpRequest();

// Setup our listener to process completed requests
//Esto es una llamada asincrona 
xhr.onload = function () {

	// Process our return data
	if (xhr.status >= 200 && xhr.status < 300) {
		// What do when the request is successful
		//console.log('success!', xhr);
		console.log(xhr,this.responseText);

		let usuarios = JSON.parse(xhr.responseText);
		usuarios.forEach(user => {
			console.log(`Nombre: ${user.name} Email ${user.email}`);
		});
	} else {
		// What do when the request fails
		console.log('The request failed!');
	}
};

// Create and send a GET request
// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
// The second argument is the endpoint URL
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.send();
