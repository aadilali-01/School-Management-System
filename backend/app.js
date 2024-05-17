require("dotenv").config({path: "./.env"})
const express = require("express");
const app = express();
const cors = require("cors");
var path = require('path');

// Databse Connection
require("./models/database.js").connectDatabase();

// Initializing cors for connection between server and client
app.use(cors({credentials: true, origin: true}))


// app.use("/public", express.static('public/'));
//Implement ejs files
// app.use(express.static('views'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');
// app.set('views', __dirname + '/views');
// app.use(express.static("public"));
// app.use(express.static('public'))
app.use('/admin',express.static(path.join(__dirname, './public')));
// const staticPath = path.join(__dirname, 'public');

// // Serve static files from the 'public' directory
// app.use(express.static(staticPath));

//logger
const logger = require("morgan");
app.use(logger("tiny"));

// Body Parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Sessions and Cookies
const session = require("express-session");
// const cookieparser = require("cookie-parser");

app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.EXPRESS_SESSION_SECRET
}))

// app.use(cookieparser());

// Routes
app.use("/admin", require("./routes/indexRoutes.js"));

// Error handling
const ErrorHandler = require("./utils/errorHandler.js");
const { generatedErrors } = require("./middlewares/error.js");
app.all("*", (req,res,next) => {
    next(new ErrorHandler(`Requested URL Not Found: ${req.url}`,404));
});
// app.use(generatedErrors)


app.listen(process.env.PORT, console.log(`Server listening on port ${process.env.PORT}`));