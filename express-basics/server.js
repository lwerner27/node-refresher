const express = require("express");

const app = express();

// This middleware will always run
app.use("/", (req, res, next) => {
    next(); // This allows for continuation to the next middleware
});

app.use("/add-product", (req, res) => {
    res.send("<h1>Add Product</h1>");
});

app.use("/", (req, res) => {
    res.send("<h1>Hello World</h1>");
});

app.listen(4000, () => {
    console.log("Server is listening on port 4000");
});
