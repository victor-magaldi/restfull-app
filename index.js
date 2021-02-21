const express = require("express");

let app = express();

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>olá ,  sou a / </h1>");
});
app.get("/users", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json({
    users: [
      {
        name: "Victor de Souza Magalid",
        idade: 27,
        email: "victmagaldi@hotmail.com",
      },
      {
        name: "João Silva",
        idade: 99,
        email: "teste@hotmail.com",
      },
    ],
  });
});
app.listen(3000, "127.0.0.1", () => {
  console.log("server running");
});
