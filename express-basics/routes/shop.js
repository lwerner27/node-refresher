const path = require("path");
const express = require("express");
const rootDir = require("../utils/path");

const { products } = require("./admin");

const router = express.Router();

// Default route.
router.get("/", (req, res) => {
    console.log(products);
    res.render("shop", { products, docTitle: "Shop" });
});

module.exports = router;
