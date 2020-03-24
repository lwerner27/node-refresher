// Array used for storing products
const products = [];

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
    products.push({ title: req.body.title });
    res.redirect("/");
}

// Function used for serving the "/" page and data
function getProducts(req, res) {
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
    getProducts,
    products
};
