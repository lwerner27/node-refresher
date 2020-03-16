const express = require("express");

const router = express.Router();

// Route for rendering a page that allows users to add a product.
// Chanaged app to router becuase we are now using the express router.
// Changed .use() to .get() so that the endpoint only responds to get requests.
router.get("/add-product", (req, res) => {
    res.send(
        "<form action='/product' method='POST'><input type='text' name='product' /> <button type='submit'>Add Product</button></form>"
    );
});

// Route that handles the post request for a products submitted by users.
// Chanaged app to router becuase we are now using the express router.
// Change app.use to app.post so it only responds to post requests.
router.post("/product", (req, res) => {
    console.log(req.body);
    res.redirect("/");
});

module.exports = router;
