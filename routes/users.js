const nedb = require("nedb");
const db = new nedb({ filename: "users.db", autoload: true });

module.exports = (app) => {
  let route = app.route("/users");

  route.get((req, res) => {
    db.find({})
      .sort({ name: 1 })
      .exec((err, users) => {
        if (err) {
          route.utils.error.send(err, req, res);
        } else {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json({
            users,
          });
        }
      });
  });

  route.post((req, res) => {
    db.insert(req.body, (err, user) => {
      if (err) {
        app.utils.error.send(err, req, res);
      } else {
        res.status(200).json(user);
      }
    });
  });
};
