// Global Node Modules
const path = require("path");

// External Node Modules
const express = require("express");
const bodyParser = require("body-parser");
const hbs = require("express-handlebars");

// Route imports
const adminRoutes = require("./routes/admin");
const shopRouter = require("./routes/shop");

// Express Initialization
const app = express();

// Handlebars Setup
app.engine("handlebars", hbs());
app.set("view engine", "handlebars");

// Body Parser Setup
app.use(bodyParser.urlencoded({ extended: true }));

// Static Directory Setup
app.use(express.static(path.join(__dirname, "public")));

// Route Assignments
app.use("/admin", adminRoutes);
app.use(shopRouter);

// 404 Route
app.use((req, res) => {
    res.status(404).render("404", { pageTitle: "404: Page Not Found" });
});

app.listen(4000, () => {
    console.log("Server is listening on port 4000");
});
