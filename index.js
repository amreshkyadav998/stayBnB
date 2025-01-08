// Importing required modules and setting up the app
const express = require("express");
const app = express();
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
const cors = require('cors');

const listingsRoutes = require('./routes/listing.js');
const reviewRoutes = require('./routes/review.js');
const userRoutes = require('./routes/user.js');

// Load environment variables
require("dotenv").config();

// Connect to MongoDB
const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT;

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
    secret: process.env.SESSION_SECRET,
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
    res.redirect("/listings");
    // res.send("root");
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
    res.status(501).render("error", { 
        message: err.message || "Something went wrong!" 
    });
});


// Start the server
app.listen(PORT, () => {
    console.log("Server is listening on port", PORT);
});
