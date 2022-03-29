const express = require("express");
const Router =  express.Router();
const {UserData} = require("../Controllers/Usercontroller");
Router.route('/').get((req,res)=>{
	res.send('hello there');
});

Router.route('/create/user').post(UserData);

module.exports = Router;