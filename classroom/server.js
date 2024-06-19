const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");

app.get("/getcookies",(req,res) =>{
    res.cookie("greet" , "hello");  //name->greet , value->hello    name-value-pair
    res.send("send you some cookies!");
});
app.get("/", (req, res) => {
    res.send("Hi, I am root");
});

app.use("/users", users);
app.use("/posts", posts);

app.listen(3000, () => {
    console.log("server is listening to 3000");
});
