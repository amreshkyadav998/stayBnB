const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const session = require("express-session");

const sessionOptions = {
    secret: "mysupersecretstring",
    resave: false,
    saveUninitialized: true,
    }

app.use(session(sessionOptions));


app.get("/register",(req,res) =>{
    let {name = "anonymous"} = req.query;
    req.session.name = name;
    console.log(req.session.name);
    res.redirect("/hello");
})

app.get("/hello" , (req,res) =>{
    res.end(`Hello , ${req.session.name}`);
})

app.get("/reqcount", (req, res) => {
    if(req.session.count){
        req.session.count++;
    }else{
        req.session.count = 1;
    }   
    res.send(`You sent a request ${req.session.count} times`);
})



// app.get("/getcookies",(req,res) =>{
//     res.cookie("greet" , "hello");  //name->greet , value->hello    name-value-pair
//     res.send("send you some cookies!");
// });
// app.get("/", (req, res) => {
//     res.send("Hi, I am root");
// });

// app.use("/users", users);
// app.use("/posts", posts);

app.listen(3000, () => {
    console.log("server is listening to 3000");
});
