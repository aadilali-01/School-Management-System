const nodemailer = require('nodemailer');
const ErrorHandler = require('./errorHandler');

exports.sendMail = (req, res, next, url) => {
    const transport = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,
        auth: {
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PASSWORD
        },
    });

    const mailOptions = {
        from: "Hackerkernel Pvt. Ltd.",
        to: req.body.email,
        subject: "Password Reset Link",
        html: `<h1>Click Password Reset Link Below</h1>
                <a href="${url}">Reset Password</a>
            `
    };

    transport.sendMail(mailOptions,(err,info)=>{
        if(err) return next(new ErrorHandler(err,500))
        console.log(info);
        return res.status(200).json({
            message: "Mail sent successfully",
            url
        })
    })
}