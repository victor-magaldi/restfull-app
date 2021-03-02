module.exports = {
  user: (app, req, res) => {
    req.assert("name", "nome obrigatório").notEmpty();
    req.assert("email", "emal inválido").notEmpty().isEmail();
    req.assert("idade", "idade vazia").notEmpty();

    let errors = req.validationErrors();
    if (errors) {
      app.utils.error.send(errors, req, res);
      return false;
    } else {
      return true;
    }
  },
};
