// Em authenticateJWT.js
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'Jeffley2024';

const authenticateJWT = (req, res, next) => {
  const tokenHeader = req.headers['authorization'];
  const token = tokenHeader && tokenHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Não autorizado!" });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ message: 'Token expirado!' });
      }
      return res.status(403).json({ message: 'Token inválido!' });
    }
    req.user = user;
    next();
  });
};

module.exports = authenticateJWT;
