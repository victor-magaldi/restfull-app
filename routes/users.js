const nedb = require("nedb");
const db = new nedb({ filename: "users.db", autoload: true });

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

  app.post("/users", (req, res) => {
    db.insert(req.body, (err, user) => {
      if (err) {
        console.log("error:" + err);
        res.status(400).json({
          error: err,
        });
      } else {
        res.status(200).json(user);
      }
    });
  });
};
