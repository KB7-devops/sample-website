// import the http module
var http = require('http');

//handle sending requests and returning responses
function handleRequests(req, res) {
	res.end('Hello');
}

//create the server
var server = http.createServer(handleRequests);

//start server and listen on port x
server.listen(8081, function(){
	console.log('Listening on port 8081');
});