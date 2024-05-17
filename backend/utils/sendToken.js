exports.sendToken = (admin, statusCode, res) => {
    const token = admin.getJWTtoken();
    console.log(token)
  
    // const options = {
    //   expires: new Date(
    //     Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    //   ),
    //   httpOnly: true,
    //   secure: true,
    //   sameSite: "None",
    // };
  
    res.status(statusCode)
      // .cookie("token", token, options)
      .json({ success: true, admin, token });
  };
  