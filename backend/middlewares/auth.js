const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/errorHandler.js");

const { catchAsyncError } = require("./catchAsyncError.js");

// exports.isAuthenticated = catchAsyncError(async (req, res, next) => {
//   const { token } = req.cookies;
//   const data = req.cookies;
//   if (!token) {
//     return next(new ErrorHandler("Please login to access the resource", 401));
//   }

//   const { id } = jwt.verify(token, process.env.JWT_SECRET);
//   req.id = id;

//   next();
// });

exports.isAuthenticated  = catchAsyncError(async(req,res,next)=>{
  const token = req.headers.authorization.split(" ")[1];
  console.log(token);
  if (!token) {
    return next(new ErrorHandler("Please login to access the resource", 401));
  }
  const user = jwt.verify(token,process.env.JWT_SECRET)
  next();
})
