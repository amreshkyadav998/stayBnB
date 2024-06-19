const express = require("express");
const router = express.Router()

// Define your routes
router.get("/", (req, res) => {
    res.send("This is the post route");
});

//posts
router.get("/",(req,res)=>{
    res.send("get for post");
});

//Show
router.get("/:id",(req,res)=>{
    res.send("get for post id");
});

//post
router.post("/",(req,res)=>{
    res.send("post for post");
});

//delete
router.post("/:id",(req,res)=>{
    res.send("post for post id");
});

module.exports = router;