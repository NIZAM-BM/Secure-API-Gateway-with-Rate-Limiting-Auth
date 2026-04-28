const { verifyToken } = require('../utils/tokenUtil');

function authMiddleware(req, res, next) {
  const header = req.headers['authorization'];

  if (!header) return res.status(401).json({ message: 'No token provided' });

  const token = header.split(' ')[1];

  try {
    const user = verifyToken(token);
    req.user = user;
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid token' });
  }
}

module.exports = authMiddleware;