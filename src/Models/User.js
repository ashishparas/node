const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const schema = mongoose.Schema({
    username:String,
    email:String,
    password:String
});

schema.pre('save', async function(next){

    try{
        const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword; 
    next();
    }catch(err){
        next(err);
    }
    
});

module.exports = mongoose.model('user', schema);