const express = require("express");

// Importing Controller Functions
const { getAddProduct, postAddProduct } = require("../controllers/products");

const router = express.Router();

// /admin/add-product
router.get("/add-product", getAddProduct);

// /admin/add-product
router.post("/add-product", postAddProduct);

module.exports = router;
