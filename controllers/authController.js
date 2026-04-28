const { generateToken } = require('../utils/tokenUtil');

function login(req, res) {
  const { username, password } = req.body;

  // simple dummy check
  if (username === 'admin' && password === '1234') {
    const token = generateToken({ username });
    return res.json({ token });
  }

  res.status(401).json({ message: 'Invalid credentials' });
}

module.exports = { login };