/**
 * Created by dobyeongsu on 2016. 6. 28..
 */
const conf = process.env.NODE_ENV==='production' ? {
  secret: '1234567890QWERTY',
  name: 'sessionId',
  resave: false,
  saveUninitialized: false,
  cookie: {httpOnly: true, domain: 'venacle.com', maxAge: 7 * 24 * 60 * 60 * 1000}
} : {
  secret: '1234567890QWERTY',
  name: 'sessionId',
  resave: false,
  saveUninitialized: false,
  cookie: {httpOnly: true, domain: 'localhost', maxAge: 7 * 24 * 60 * 60 * 1000}
};

module.exports = conf;