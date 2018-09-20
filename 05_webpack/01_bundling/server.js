const fs = require('fs');
const { resolve } = require('path');
const http = require('http');

http
  .createServer(function(req, res) {
    const { url } = req;

    // console.log(url);

    switch (url) {
      case '/':
      case '/index.html':
        fs.readFile(resolve('dist', 'index.html'), (err, data) => {
          if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end();
          } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
          }
        });
        break;

      case '/bundle.js':
        fs.readFile(resolve('dist', 'bundle.js'), (err, data) => {
          if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end();
          } else {
            res.writeHead(200, { 'Content-Type': 'application/javascript' });
            res.end(data);
          }
        });
        break;

      default:
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end();
    }
  })
  .listen(1337);
