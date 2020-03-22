const express = require("express");

const { products } = require("./admin");

const router = express.Router();

// Default route.
router.get("/", (req, res) => {
    res.render("shop", {
        products,
        pageTitle: "Shop",
        path: "/"
    });
});

module.exports = router;
