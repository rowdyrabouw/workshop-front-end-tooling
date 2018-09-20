require('http').createServer(function(req, res) {
  res.end('\\o/\n O\n/ \\');
  console.log(res.socket.remoteAddress);
}).listen(1337);
