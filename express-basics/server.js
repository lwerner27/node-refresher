const express = require("express");
const bodyParser = require("body-parser");

// Sets up the express app
const app = express();

// This has our app use the body-parser middleware for... Parsing the body...
// True is the default value for "extended" but needs to be manually set.
app.use(bodyParser.urlencoded({ extended: true }));

// This middleware will always run
app.use("/", (req, res, next) => {
    next(); // This allows for continuation to the next middleware
});

// Route for rendering a page that allows users to add a product.
app.use("/add-product", (req, res) => {
    res.send(
        "<form action='/product' method='POST'><input type='text' name='product' /> <button type='submit'>Add Product</button></form>"
    );
});

// Route that handles the post request for a products submitted by users.
app.use("/product", (req, res) => {
    console.log(req.body);
    res.redirect("/");
});

// Default route.
app.use("/", (req, res) => {
    res.send("<h1>Hello World</h1>");
});

// Runs the server.
app.listen(4000, () => {
    console.log("Server is listening on port 4000");
});
