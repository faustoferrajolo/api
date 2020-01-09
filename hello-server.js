// Build a server with Node's HTTP module
const http = require('http');
const hostname = '127.0.0.1';
const port = 3001;


const server = http.createServer((request, response) =>{
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    console.log(`URL: ${request.url}`);
    response.end('Hello Server\n');

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

/* server**on('request'** function(request, response) {
    console.log(`URL: ${request.url}`);
    response.end('Hello, server!');
});

// Start the server
server.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
 
    console.log(`Server is listening on port ${port}`)
}); */




