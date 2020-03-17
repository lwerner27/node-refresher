const express = require("express");
const bodyParser = require("body-parser");

// Project Module Imports
const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");

// Sets up the express app
const app = express();

// This has our app use the body-parser middleware for... Parsing the body...
// True is the default value for "extended" but needs to be manually set.
app.use(bodyParser.urlencoded({ extended: true }));

// This middleware will always run
app.use("/", (req, res, next) => {
    next(); // This allows for continuation to the next middleware
});

// Middleware router that contains admin routes (see ./routes/admin.js)
app.use("/admin", adminRouter);

// Middleware router that contains shop routes (see ./routes/shop.js)
app.use(shopRouter);

// This creates a 404 route for our site.
app.use((req, res) => {
    res.status(404).send("<h1>Page Not Found</h1>");
});

// Runs the server.
app.listen(4000, () => {
    console.log("Server is listening on port 4000");
});
