const express = require("express");
const router = express.Router();

// Define your routes
router.get("/", (req, res) => {
    res.send("This is the user route");
});

// Index-users
router.get("/",(req,res)=>{
    res.send("get for users");
});

//Show-users
router.get("/:id",(req,res)=>{
    res.send("or user id");
});

//post-users
router.post("/",(req,res)=>{
    res.send("post for users");
});

//delete-users
router.post("/:id",(req,res)=>{
    res.send("post for users id");
});


module.exports = router;