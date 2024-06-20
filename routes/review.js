const express = require('express');
const router = express.Router({ mergeParams: true });  // Ensure params are merged from parent routes
const Review = require('../models/review.js');  // Import Review model
const Listing = require('../models/listing.js');  // Import Listing model
const wrapAsync = require('../utils/wrapAsync');
const ExpressError = require('../utils/ExpressError');
const { reviewSchema } = require('../schema');

// Middleware to validate review data
const validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

// Reviews Post Route
router.post("/", validateReview, wrapAsync(async (req, res) => {
    const { id } = req.params;  // Access the id parameter
    const listing = await Listing.findById(id);  // Find the listing by ID
    if (!listing) {
        throw new ExpressError(404, "Listing not found!");
    }
    const review = new Review(req.body.review);  // Create a new review
    listing.reviews.push(review);  // Add the review to the listing
    await review.save();  // Save the review
    await listing.save();  // Save the listing
    req.flash("success" , "New Review Created");
    res.redirect(`/listings/${id}`);
}));

// Delete Review Route
router.delete("/:reviewId", wrapAsync(async (req, res) => {
    const { id, reviewId } = req.params;  // Access the id and reviewId parameters
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });  // Remove the review from the listing
    await Review.findByIdAndDelete(reviewId);  // Delete the review
    req.flash("success" , "Review Deleted");
    res.redirect(`/listings/${id}`);
}));

module.exports = router;
