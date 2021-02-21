const http = require("http");

let server = http.createServer((req, res) => {
  console.log("url", req.url);
  console.log("method", req.method);

  switch (req.url) {
    case "/":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end("<h1>olá ,  sou a / </h1>");
      break;

    case "/users":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(
        JSON.stringify({
          users: [
            {
              name: "Victor de Souza Magalid",
              idade: 27,
              email: "victmagaldi@hotmail.com",
            },
          ],
        })
      );
      break;
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("run serveerrr");
});
