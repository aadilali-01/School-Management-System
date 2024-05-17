const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const adminModel = new mongoose.Schema({
    name: {
        type: 'string',
        required: [true, "Name is required"]
    },
    email: {
        type: 'string',  
        required: [true, "Email is required"],
        unique: true, 
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    schoolName: {
        type: 'string',  
        required: [true, "School name is required"],
        unique: true, 
    },
    password: {
        type: 'string',
        select: false,
        required: [true, "Password is required"],
        maxLength: [15, "Password should not exceed 15 characters"],
        minLength: [6, "Password should have atleast 6 characters"],
        // match: []
    },
    resetPasswordToken: {
        type: Number,
        default: 0,
    },
},{timestamps: true})

adminModel.pre("save", function(){
    if(!this.isModified("password")){
        return;
    }
    let salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
})

adminModel.methods.comparePassword = function(password){
    return bcrypt.compareSync(password, this.password);
}

adminModel.methods.getJWTtoken = function(){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    })
}

const Admin = mongoose.model("Admin", adminModel);

module.exports = Admin;