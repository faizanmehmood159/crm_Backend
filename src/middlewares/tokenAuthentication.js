const jwt = require('jsonwebtoken');

const tokenAuthentication = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Unauthorized: Token not provided' });
  }

  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: Invalid token format' });
  }

  console.log('Token received:', token); 

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.error('JWT Verify Error:', err);
      return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }
    req.user = decoded;
    next();
  });
};

module.exports = tokenAuthentication;
