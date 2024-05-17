const { catchAsyncError } = require("../middlewares/catchAsyncError")
const Admin = require("../models/AdminModel.js");
const ErrorHandler = require("../utils/errorHandler.js");
const { sendMail } = require("../utils/nodemailer.js");
const { sendToken } = require("../utils/sendToken.js");

exports.homepage = catchAsyncError (async(req, res, next) => {
    res.json("Hello")
    // const admin = await Admin.findById(req.id);
    // console.log(admin,req.id)
    // return res.render("admin/dashboard/dashboard.ejs",admin)
});

exports.currentAdmin = catchAsyncError (async(req, res, next) => {
    const admin = await Admin.findById(req.id)
    console.log(req.id)
    res.json(admin)
});

exports.adminSignUp = catchAsyncError (async(req, res, next) => {
    const alreadyExist = await Admin.findOne({email: req.body.email})
    if(alreadyExist) return next(new ErrorHandler("User already exist with this email address",409))
    const admin = await new Admin(req.body).save();
    sendToken(admin, 201, res);
});

// Render sign in page
exports.viewSignInPage = catchAsyncError (async(req, res, next) => {
    // res.json("Hello")
    return res.render("admin/dashboard/signin.ejs")
});

exports.adminSignIn = catchAsyncError (async(req, res, next) => {
    const admin = await Admin.findOne({email: req.body.email}).select("+password");

    if(!admin) return next(new ErrorHandler("User not found with this email address",404))

    const isMatch = admin.comparePassword(req.body.password);    
    if(!isMatch) return next(new ErrorHandler("Email or Password is invalid",500));
    sendToken(admin, 200, res);
});

exports.adminSignOut = catchAsyncError(async (req, res, next) => {
    res.clearCookie("token");
    return res.status(200).json({ message: "Signed out successfully" });
});


exports.adminForgot = catchAsyncError (async(req, res, next) => {
    const admin = await Admin.findOne({email: req.body.email})
    if(!admin) return next(new ErrorHandler("User not found with this email address",404))
    
    const url = `${req.protocol}://${req.get("host")}/admin/forgot-link/${admin._id}`
    sendMail(req,res,next,url)
    admin.resetPasswordToken = 1;
    await admin.save();
    res.json({admin, url})
});

exports.adminForgotLink = catchAsyncError (async(req, res, next) => {
    const admin = await Admin.findById(req.params.id);
    if(!admin) return next(new ErrorHandler("User not found with this email address",404))
    if(admin.resetPasswordToken === 1){
        admin.resetPasswordToken = 0;
        admin.password = req.body.password;
        await admin.save();
    }else{
        return next(new ErrorHandler("Invalid reset password link. Please try again!",500))
    }
    res.status(200).json({message: "Password changed successfully"})
});

exports.adminReset = catchAsyncError (async(req, res, next) => {
    const admin = await Admin.findById(req.id);
    admin.password = req.body.password;
    await admin.save();
    sendToken(admin, 201, res);
});