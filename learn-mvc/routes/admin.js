const express = require("express");

// Importing Controller Functions
const {
    getAddProduct,
    postAddProduct,
    products
} = require("../controllers/products");

const router = express.Router();

router.get("/add-product", getAddProduct);

router.post("/add-product", postAddProduct);

module.exports = router;
