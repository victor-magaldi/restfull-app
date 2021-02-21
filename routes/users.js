module.exports = (app) => {
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

  app.get("/users/admin", (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
      users: [],
    });
  });
};
