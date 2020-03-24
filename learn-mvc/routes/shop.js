const express = require("express");

const { products } = require("./admin");

const router = express.Router();

router.get("/", (req, res) => {
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
