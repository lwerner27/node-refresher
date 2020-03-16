const express = require("express");

const app = express();

app.use((req, res, next) => {
    console.log("This is middleware one.");
    next(); // This allows for continuation to the next middleware
});

app.use((req, res, next) => {
    console.log("This is middelware two.");
    res.send("<h1>Hello World</h1>");
});

app.listen(4000, () => {
    console.log("Server is listening on port 4000");
});
