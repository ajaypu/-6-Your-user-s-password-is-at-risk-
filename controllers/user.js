const User = require("../models/user");

exports.signup = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  if (!(name && email && password)) {
    return res.status(400).json({ err: "Fill all the detail required" });
  }

  User.create({
    name: name,
    email: email,
    password: password,
  })
    .then(() => {
      return res.status(201).json({ message: "Successfully created new user" });
    })
    .catch((err) => {
      res.send(500).json(err);
    });
};

// exports.getLogin = (req, res, next) => {
//   res.send("hello");
// };
