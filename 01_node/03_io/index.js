const { readFile, writeFile } = require('fs');
const { resolve } = require('path');
const { promisify } = require('util');

const read = promisify(readFile);
const write = promisify(writeFile);

read('data.json', 'utf8')
  .then(JSON.parse)
  .then(data => {
    console.log('read file');
    console.log(data);

    if (!('counter' in data)) {
      data.counter = 0;
    } else {
      data.counter++;
    }

    return write('data.json', JSON.stringify(data, null, '  '), 'utf8');
  })
  .then(() => {
    console.log('written file...');
  })
  .catch(console.error)
;
