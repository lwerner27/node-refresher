const express = require("express");

const {
    getProducts,
    getIndex,
    getCart,
    getCheckout,
    getOrders,
    getProductDetails
} = require("../controllers/shop");

const router = express.Router();

router.get("/", getIndex);
router.get("/products", getProducts);
router.get("/cart", getCart);
router.get("/checkout", getCheckout);
router.get("/orders", getOrders);
router.get("/product-details/:productId", getProductDetails);

module.exports = router;
