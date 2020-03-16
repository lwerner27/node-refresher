const http = require("http");

const server = http.createServer((req, res) => {
	console.log(req.url, req.method, req.headers);
	res.setHeader("contentType", "text/html");
	res.write("<html>");
	res.write("<head><title>Hello World</title></head>");
	res.write("<body><h1>Hello World</h1></body>");
	res.write("</html>");
	res.end();
});

server.listen(4000, () => {
	console.log("Listening on port: 4000");
});
