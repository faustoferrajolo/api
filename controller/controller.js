'use strict';

var User = require('../model/model.js');

exports.list_all_users = function(req, res) {
  User.getAllUser(function(err, user) {
    console.log('controller: list all users')
    if (err){
        res.send(err);
    }else{
        //console.log('res', user);
        res.send(user);
    }
  });
};

exports.read_a_user = function(req, res) {
    User.getUserById(req.params.userId, function(err, user) {
        console.log('controller: read a user')
        if (err){
            res.send(err);
        }else{
            res.send(user);
        }
    });
  };

exports.create_a_user = function(req, res) {
    var new_user = new User(req.body);
    //handle null error
    if(!new_user.name || !new_user.email){
        res.status(400).send({error:true, message:'Please provide name/email'});
    }else{
        User.createUser(new_user, function(err, user){
            console.log('controller: create a user');
            if(err){
                console.log(err);
                res.send(err);
            }else{
//                console.log(user);
                res.status(200).json(user);
            }
        });
    };
};

exports.update_a_user = function(req, res){
    User.updateUserById(req.params.userId, new User(req.body), function(err, user){
        console.log('controller: update a user');
        if(err){
            console.log(err);
            res.send(err);
        }else{
            console.log(user);
            res.status(200).json(user);
        }
    });
}


exports.delete_a_user = function(req, res) {
    User.removeUserById(req.params.userId, function(err, user){
        if(err){
            console.log(err);
            res.send(err);
        }else{
            console.log(user);
            res.status(200).json({ message: 'User successfully deleted' });
        }
    });
};
