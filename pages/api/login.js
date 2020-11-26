import jwt from 'jsonwebtoken';

const SECRET_KEY = 'QoKsagheNZ';

export default function (req, res) {
  if (!req.body) {
    res.statusCode = 404;
    res.end('Error');
    return;
  }

  const { username, password } = req.body;
  res.json({
    token: jwt.sign(
      {
        username,
        admin: username === 'admin' && password === 'admin',
      },
      SECRET_KEY,
    ),
  });
}
