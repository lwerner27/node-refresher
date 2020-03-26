const Product = require("../models/product");

// Function used for serving the "/products" page and data
function getProducts(req, res) {
    Product.fetchAll(products => {
        res.render("shop/product-list", {
            products,
            pageTitle: "All Products",
            hasProducts: products.length > 0,
            activeProducts: true,
            productCSS: true
        });
    });
}

// Function used for serving the "/" page
function getIndex(req, res) {
    Product.fetchAll(products => {
        res.render("shop/index", {
            products,
            pageTitle: "Shop",
            activeShop: true,
            hasProducts: products.length > 0,
            productCSS: true
        });
    });
}

// Function used for serving the "/cart" page
function getCart(req, res) {
    res.render("shop/cart", {
        pageTitle: " Your Cart",
        activeCart: true
    });
}

function getCheckout(req, res) {
    res.render("shop/checkout", {
        pageTitle: "Checkout"
    });
}

module.exports = {
    getProducts,
    getIndex,
    getCart,
    getCheckout
};
