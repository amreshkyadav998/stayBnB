const { ref } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema; // so that we don't need to write mongoose.schema again and again we can write Only Schema
const Review = require("./review.js")

const listingSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    
    image:{
     type:String,
     default:"https://plus.unsplash.com/premium_photo-1714051660747-f7bd10754e50?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    set: (v) => v==""?"https://unsplash.com/photos/a-bird-standing-on-the-edge-of-a-cliff-next-to-the-ocean-I0_Pe5n4O6w" : v,
    },
    price:Number,
    location:String,
    country:String,
    reviews : [
        {
            type : Schema.Types.ObjectId,
            ref : "Review",
        },
    ],

});

listingSchema.post("findOneAndDelete", async(listing) =>{
    if(listing){
    await Review.deleteMany({reviews :{$in: listing.reviews}});
    }
})

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;