// Global Node Modules
const path = require("path");

// External Node Modules
const express = require("express");
const bodyParser = require("body-parser");
const hbs = require("express-handlebars");

// Project Module Imports
// Renamed a destructured property from the exports of the admin file object.
const { router: adminRouter } = require("./routes/admin");
const shopRouter = require("./routes/shop");

// Sets up the express app
const app = express();

// We need to tell express about this rendering engine because it doesn't have built in fucntionality already.
// This layoutsDir is the default location so we don't have to set it but this is how we would.
// "main" is also the default value for "defaultLayout" but we will set it anyways.
app.engine(
    "handlebars",
    hbs({ layoutsDir: "views/layouts/", defaultLayout: "main" })
);

// This enables handlebars as the view engine
app.set("view engine", "handlebars");

// This is normally only need if the views folder is not in the root of the project
app.set("views", "views");

// This has our app use the body-parser middleware for... Parsing the body...
// True is the default value for "extended" but needs to be manually set.
app.use(bodyParser.urlencoded({ extended: true }));

// This exposes the public folder to the internet with read access.
app.use(express.static(path.join(__dirname, "public")));

// This middleware will always run
// It doesn't actually do anything
app.use("/", (req, res, next) => {
    next(); // This allows for continuation to the next middleware
});

// Middleware router that contains admin routes (see ./routes/admin.js)
app.use("/admin", adminRouter);

// Middleware router that contains shop routes (see ./routes/shop.js)
app.use(shopRouter);

// This creates a 404 route for our site.
app.use((req, res) => {
    res.status(404).render("404", { pageTitle: "404: Page Not Found" });
});

// Runs the server.
app.listen(4000, () => {
    console.log("Server is listening on port 4000");
});
