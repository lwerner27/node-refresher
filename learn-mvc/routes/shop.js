const express = require("express");

const { products } = require("./admin");

const router = express.Router();

// Default route.
router.get("/", (req, res) => {
    // console.log(products);
    res.render("shop", {
        products,
        pageTitle: "Shop",
        path: "/",
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
});

module.exports = router;
