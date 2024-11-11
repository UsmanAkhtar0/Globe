const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");

const { validateReview, isLoggedIn, isAuthor } = require("../middleware.js");
const reviewController = require("../controllers/review.js");


router.delete("/:reviewId", isLoggedIn, isAuthor, wrapAsync(reviewController.destroyReview));

router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview));


module.exports = router;