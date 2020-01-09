// Require packages and set the port
const express = require('express');
const hostname = '127.0.0.1';
const port = 3002;
const app = express();

const bodyParser = require('body-parser');

var routes = require('./routes/routes.js');

// Body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


// Routes(app);
//app.use('/', routes);
var routes = require('./routes/routes.js'); //importing route
routes(app); //register the route


// Start server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
 
    console.log(`Server listening on port ${server.address().port}`);
});




