const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstname:{
        type: String,
        required: true
        
    },
    lastname:{
        type: String,
        required: true
        
    },
    email:{
        type: String,
        required: true
        
    },
    password:{
        type: String,
        required: true
        
    }

    
},{
    timestamps: true,
})

const userModel = mongoose.model('users', userSchema)
module.exports = userModel