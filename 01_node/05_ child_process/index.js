const { spawn } = require('child_process');

spawn('node', ['counter.js'], { stdio: 'inherit' });
spawn('node', ['server.js'], { stdio: 'inherit' });
