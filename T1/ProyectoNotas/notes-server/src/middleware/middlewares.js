const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config');

const adminUser = {
  username: 'admin',
  password: '$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36Zf4u4J3yY1lZ1lZ1lZ1lZ' // bcrypt hash of 'adminpassword'
};

const verifyToken = async (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(403).json({ message: 'Token not provided' });
  }

  try {
    const encryptedToken = token.trim();
    const isValid = await bcrypt.compare(adminUser.password, encryptedToken);

    if (!isValid) {
      return res.status(401).json({ message: 'Invalid or expired token' });
    }

    const decoded = jwt.verify(token.split(' ')[1], jwtSecret);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
};

const checkAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    return res.status(403).json({ message: 'Admin access required' });
  }
};

module.exports = { verifyToken, checkAdmin };