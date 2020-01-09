'use strict';
module.exports = function(app) {
  var usersList = require('../controller/controller.js');

  // usersList Routes
  app.route('/users')
    .get(usersList.list_all_users)
    .post(usersList.create_a_user); 

  app.route('/users/:userId')
    .get(usersList.read_a_user)
    .put(usersList.update_a_user)
    .delete(usersList.delete_a_user);

};  



/// Desde acà abajo anda!

/* const express = require('express');
var router = express.Router();
//var app = express();
const mysqlConnection  = require('../data/config');


// define the home page route
router.get('/', function(req, res) {
  res.send('Root home page');
});
// define the about route
router.get('/about', function(req, res) {
  res.send('About home page');
});

// List all users
router.get('/users', function(request, response){
    mysqlConnection.query("SELECT * FROM users", (error, result, fields) => {
        if (error) throw error;
         response.send(result);
    });
});

// List user by ID
router.get('/users/:id', function(request, response, next) {
  mysqlConnection.query('select * from users where id = ?',[request.params.id], 
  function(error,result,fields){
    if(error!==null || !result.length)
      response.send(error);
    else
      //response.json(result[0])
      response.send(result[0])
  });
}); 


// Export Routes
module.exports = router; */
