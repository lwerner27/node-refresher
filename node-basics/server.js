const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method, req.headers);
    const { url, method } = req;
    if (url === "/") {
        res.setHeader("contentType", "text/html");
        res.write("<html>");
        res.write("<head><title>Enter Message</title></head>");
        res.write(
            "<body><form action='/message' method='POST'><input name='message' type='text' /><button type='submit'>Send</button></form></body>"
        );
        res.write("</html>");
        return res.end();
    }

    if (url === "/message" && method === "POST") {
        const body = [];
        req.on("data", chunk => {
            // console.log(chunk);
            body.push(chunk);
        });
        req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            // console.log(message);
            fs.writeFile("messages.txt", message, err => {
                res.statusCode = 302;
                res.setHeader("Location", "/");
                return res.end();
            });
        });
    }
});

server.listen(4000, () => {
    console.log("Listening on port: 4000");
});
