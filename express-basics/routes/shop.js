const path = require("path");
const express = require("express");
const rootDir = require("../utils/path");

// const { products } = require("./admin");

const router = express.Router();

// Default route.
router.get("/", (req, res) => {
    // console.log("shop.js", products);s
    res.render("shop");
});

module.exports = router;
