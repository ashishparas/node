const User = require("../Models/User.js");

exports.UserData = async(req, res) => {
    try{
        const {username, email, password} = req.body;

        const UserData = {
            username:username,
            email:email,
            password:password
        };
       
        const Response = await User.create(UserData);
        res.status(200).json({
            code:200,
            message:"User data added successfully!",
            data:Object
        });
    }catch(err){
        res.status(200).json({
            code:422,
            message:"failed to insert data",
            data:Object
        });
    };
    


};