const fs = require('fs');
/*
fs.writeFile('message.txt', 'Hello from Node!', (err) => { //fs.writeFile should be written instead of writeFile
    if (err) throw err;
    console.log('The file has been saved!');
  }); 
  */

  fs.readFile('./message.txt', 'utf8', (err, data) => { //use utf8 to avoid the buffer issue
    if (err) throw err;
    console.log(data);
  });