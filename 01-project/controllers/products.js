const Product = require("../models/product");

// Function used for serving the "/admin/add-product" page
function getAddProduct(req, res) {
    res.render("admin/add-product", {
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
    Product.fetchAll(products => {
        res.render("shop/product-list", {
            products,
            pageTitle: "Shop",
            path: "/",
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    });
}

// Function used for serving the "/admin/products" page
function getAdminProducts(req, res) {
    res.render("admin/products", {
        pageTitle: "Admin Products",
        path: "/admin/products"
    });
}

// Function used for serving the "/admin/edit-product" page
function getEditProduct(req, res) {
    res.render("admin/edit-product", {
        pageTitle: "Edit Product",
        path: "/admin/edit-product"
    });
}

module.exports = {
    getAddProduct,
    postAddProduct,
    getProducts,
    getAdminProducts,
    getEditProduct
};
