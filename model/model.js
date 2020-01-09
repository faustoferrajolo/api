'user strict';
const mysqlConnection  = require('../data/config');

var User = function(user){
    this.name = user.name;
    this.email = user.email;
    //this.created_at = new Date();
};

User.getAllUser = function (result){
    mysqlConnection.query("SELECT * FROM users", function (err, res){
        if(err) {
            //console.log("error: ", err);
            result(null, err);
        }else{
          //console.log('users : ', res);  
            result(null, res);
        }
    });   
};

User.getUserById = function (userId, result){
    mysqlConnection.query("SELECT * FROM users WHERE id = ?", userId, function (err, res){
        if(err){
            console.log("error: ", err);
            result(err, null);
        }else{
            result(null, res)
        }
    
    });
};

User.createUser = function (newUser, result) {
    mysqlConnection.query("INSERT INTO users SET ?", newUser, function (err, res){
        if(err){
            console.log("error: ", err);
            result(err, null);
        }else{
            console.log("model: createUser");
            //console.log(newUser.name);
            result(null, res.insertId);
        }
    });
};


User.updateUserById = function(userId, userName, result){
    mysqlConnection.query("UPDATE users SET name = ? WHERE id = ?", [userName.name, userId], function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(null, err);
            }else{   
                console.log("model: updateUserById");
                //console.log('Updated user name is: '+userName.name);
                result(null, res);
            }
        }); 
  };


User.removeUserById = function(userId, result){
    mysqlConnection.query("DELETE FROM users WHERE id = ?", [userId], function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
                console.log("model: removeUserById");
                //console.log('Deleted user name is: '+userName.name);
                result(null, res);
            }
        }); 
};  

module.exports= User;