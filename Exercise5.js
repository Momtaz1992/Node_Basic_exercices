import * as http from "http";
// Creating an HTTP server with a callback function that will be called for each request
const server = http.createServer(function (request, response) {
// Setting the response headers with a status code and content type
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});
// Starting the server and listening for incoming requests on port 80
server.listen(80);
// Logging a message to the console indicating that the server is running
console.log("Server running at http://127.0.0.1:80/");






//This code creates an HTTP server using the built-in http module. The createServer method takes a callback function that will be called for 
//each incoming request to the server. In this example, the callback function sets the response headers with a status code of 200 and a content 
//type of text/plain. It then writes the response body with the message "Hello World\n" and ends the response.