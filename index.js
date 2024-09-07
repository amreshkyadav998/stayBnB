// Importing required modules and setting up the app
const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/user.js");

const listingsRoutes = require('./routes/listing.js');
const reviewRoutes = require('./routes/review.js');
const userRoutes = require('./routes/user.js');

const MONGO_URL = "mongodb://127.0.0.1:27017/stayBnB";

// Connect to MongoDB
main().then(() => {
    console.log("Connection successful");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

// Set EJS as the view engine and configure views path
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));


 const sessionOptions = {
    secret: "mysupersecretcode",
    resave : false , 
    saveUninitialized : true,
    cookie : {
        expires : Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge : 1000 * 60 * 60 * 24 * 7,
        httpOnly : true,
    }
 }


 
 // Root Route
app.get("/", (req, res) => {
    res.redirect("I am the root");
});

 app.use(session(sessionOptions));
 app.use(flash());

 app.use(passport.initialize());
 app.use(passport.session());
 passport.use(new LocalStrategy(User.authenticate()));

 passport.serializeUser(User.serializeUser());
 passport.deserializeUser(User.deserializeUser());


app.use((req,res,next ) =>{
    res.locals.user = req.user; // Make the user object available in the views
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error");
    next();
})



// app.get("/demouser" , async(req,res) =>{
//     let fakeUser = new User({
//         email: "amy@gmail.com",
//         username : "Amresh"
//     });

//    let registeredUser = await User.register(fakeUser , "helloworld");
//    res.send(registeredUser);
// })

// Use the listings routes
app.use('/listings', listingsRoutes);
//Use the review routes
app.use('/listings/:id/reviews', reviewRoutes);
//Use the user Routes
app.use("/" , userRoutes);


// Catch-all Route for 404 Errors
app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found!"));
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    const { statusCode = 500, message = "Something went wrong!" } = err;
    res.status(statusCode).render("error", { message, statusCode });
});

// Start the server
app.listen(port, () => {
    console.log("Server is listening on port", port);
});
