const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require:[true, "user name is required"],
        trim: true
    },
    email: {
        type: String,
        require:[true, "email name is required"],
        unique: true,
        lowercade: true,
        trim:true,
    },
    age:{
        type:Number,
        min: [0, "Age cannot be nagative"]

    },
    

}, {timestamps: true}
);
const User = mongoose.model('User', userSchema);
module.exports = User;
