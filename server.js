function requireHTTPS(req, res, next) {
  // The 'x-forwarded-proto' check is for Heroku
  if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
    return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
}

const express = require('express');
const app = express();

app.use(requireHTTPS);
app.use(express.static('./dist/project-viewer'));

app.get('/en/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/project-viewer/en-US'}),
);


app.get('/sq/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/project-viewer/sq'}),
);

app.listen(process.env.PORT || 8080);
