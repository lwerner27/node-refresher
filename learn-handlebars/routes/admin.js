const express = require("express");

const router = express.Router();

const products = [];

// Route for rendering a page that allows users to add a product.
// Chanaged app to router becuase we are now using the express router.
// Changed .use() to .get() so that the endpoint only responds to get requests.
router.get("/add-product", (req, res) => {
    res.render("add-product", {
        pageTitle: "Add Product",
        path: "/admin/add-product",
        activeAddProduct: true,
        formsCSS: true,
        productCSS: true
    });
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
