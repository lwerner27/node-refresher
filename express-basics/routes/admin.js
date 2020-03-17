const path = require("path");
const express = require("express");
const rootDir = require("../utils/path");

const router = express.Router();

const products = [];

// Route for rendering a page that allows users to add a product.
// Chanaged app to router becuase we are now using the express router.
// Changed .use() to .get() so that the endpoint only responds to get requests.
router.get("/add-product", (req, res) => {
    res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// Route that handles the post request for a products submitted by users.
// Chanaged app to router becuase we are now using the express router.
// Change app.use to app.post so it only responds to post requests.
router.post("/add-product", (req, res) => {
    products.push({ title: req.body.title });
    res.redirect("/");
});

module.exports = {
    router,
    products
};
