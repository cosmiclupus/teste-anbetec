const jwt = require('jsonwebtoken');
require('dotenv').config();


function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  console.log('authHeader:', authHeader);
  if (authHeader == null) return res.sendStatus(401);
  const token = authHeader.split(' ')[1];
  console.log('token:', token);
  if (token == null || token == '') return res.sendStatus(401);
  
  console.log('Access Token Secret:', process.env.ACCESS_TOKEN_SECRET)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      console.error(err);
      return res.sendStatus(403);
    }
    req.user = user;
    console.log('Passou!!!!!!!!')
    next();
  });

}


module.exports = authenticateToken;



