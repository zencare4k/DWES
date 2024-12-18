const jwt = require('jsonwebtoken');
const { jwtSecret, jwtExpiration } = require('../config');
const { findUserByUsername } = require('../models/users');

const login = (req, res) => {
  const { username, password } = req.body;

  const user = findUserByUsername(username);
  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Credenciales inválidas' });
  }

  // Generar el token
  const token = jwt.sign({ id: user.id, role: user.role }, jwtSecret, { expiresIn: jwtExpiration });
  return res.status(200).json({ token });
};

module.exports = { login };