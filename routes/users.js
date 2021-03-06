const nedb = require("nedb");
const db = new nedb({ filename: "users.db", autoload: true });

module.exports = (app) => {
  let routeUser = app.route("/users");

  routeUser.get((req, res) => {
    db.find({})
      .sort({ name: 1 })
      .exec((err, users) => {
        if (err) {
          app.utils.error.send(err, req, res);
        } else {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json({
            users,
          });
        }
      });
  });

  routeUser.post((req, res) => {
    if (!app.utils.validator.user(app, req, res)) return false;

    db.insert(req.body, (err, user) => {
      if (err) {
        app.utils.error.send(err, req, res);
      } else {
        res.status(200).json(user);
      }
    });
  });

  const routeUserId = app.route("/users/:id");

  routeUserId.get((req, res) => {
    db.findOne({ _id: req.params.id }).exec((err, user) => {
      if (err) {
        app.utils.error.send(err, req, res);
      } else {
        res.status(200).json(user);
      }
    });
  });

  routeUserId.put((req, res) => {
    if (!app.utils.validator.user(app, req, res)) return false;

    db.update({ _id: req.params.id }, req.body, (err) => {
      if (err) {
        app.utils.error.send(err, req, res);
      } else {
        // Object.assign junta os atributos dos objetos
        res.status(200).json(Object.assign(req.body, req.body));
      }
    });
  });

  routeUserId.delete((req, res) => {
    db.remove({ _id: req.params.id }, {}, (err) => {
      if (err) {
        app.utils.error.send(err, req, res);
      } else {
        // Object.assign junta os atributos dos objetos
        res.status(200).json(req.params.id);
      }
    });
  });
};
