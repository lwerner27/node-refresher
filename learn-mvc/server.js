// Global Node Modules
const path = require("path");

// External Node Modules
const express = require("express");
const bodyParser = require("body-parser");
const hbs = require("express-handlebars");

const adminRoutes = require("./routes/admin");
const shopRouter = require("./routes/shop");

const app = express();

app.engine("handlebars", hbs());
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

// Route imports
app.use("/admin", adminRoutes);
app.use(shopRouter);

// 404 Route
app.use((req, res) => {
    res.status(404).render("404", { pageTitle: "404: Page Not Found" });
});

app.listen(4000, () => {
    console.log("Server is listening on port 4000");
});
