const bcrypt = require('bcrypt');

// Mensaje secreto original que se verificará
const SECRET_MESSAGE = "I know your secret";

const validateToken = async (req, res, next) => {
  const token = req.headers['authorization']; // Se espera el token en el header de autorización

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    // Simulación de token cifrado para la demostración.
    const encryptedToken = token.trim();

    // Validar si el token es válido desencriptándolo
    const isValid = await bcrypt.compare(SECRET_MESSAGE, encryptedToken);

    if (!isValid) {
      return res.status(403).json({ message: 'Invalid token' });
    }

    next(); // Si es válido, continúa con la siguiente función del middleware
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports = validateToken;