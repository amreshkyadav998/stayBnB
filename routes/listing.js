const express = require('express');
const router = express.Router();  //creating a new router object
const Listing = require('../models/listing');
const Review = require('../models/review');
const { listingSchema, reviewSchema } = require('../schema');
const wrapAsync = require('../utils/wrapAsync');
const ExpressError = require('../utils/ExpressError');
const {isLoggedIn}  = require('../middleware.js')

// Validation Middleware
const validateListing = (req, res, next) => {
    const { error } = listingSchema.validate(req.body);
    if (error) {
        const errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

// Index Route
router.get("/", wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index", { allListings });
}));

// New Route
router.get("/new", isLoggedIn,(req, res) => {
    res.render("listings/new");
});

// Show Route
router.get("/:id", wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    if(!listing){
        req.flash("error" , "Listing you requested for does not exist");
        res.redirect("/listings");
    }
    res.render("listings/show", { listing });
}));

// Create Route
router.post("/", validateListing, wrapAsync(async (req, res) => {
    const listing = new Listing(req.body.listing);
    await listing.save();
    req.flash("success" , "New Listing Created");
    res.redirect("/listings");
}));

// Edit Route
router.get("/:id/edit",wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error" , "Listing you requested for does not exist");
        res.redirect("/listings");
    }
    res.render("listings/edit", { listing });
}));

// Update Route
router.put("/:id", validateListing, wrapAsync(async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    req.flash("success" , "Listing Updated");
    res.redirect(`/listings/${id}`);
}));

// Delete Route
router.delete("/:id", wrapAsync(async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success" , "Listing Deleted");
    res.redirect("/listings");
}));

module.exports = router;
