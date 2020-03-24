const Product = require("../models/product");

// Function used for serving the "/admin/add-product" page
function getAddProduct(req, res) {
    res.render("add-product", {
        pageTitle: "Add Product",
        path: "/admin/add-product",
        activeAddProduct: true,
        formsCSS: true,
        productCSS: true
    });
}

// Function used for handling post requests to the /admin/add-product route
function postAddProduct(req, res) {
    const product = new Product(req.body.title);
    product.save();
    res.redirect("/");
}

// Function used for serving the "/" page and data
function getProducts(req, res) {
    const products = Product.fetchAll();
    res.render("shop", {
        products,
        pageTitle: "Shop",
        path: "/",
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
}

module.exports = {
    getAddProduct,
    postAddProduct,
    getProducts
};
