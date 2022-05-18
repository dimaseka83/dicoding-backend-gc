const fs = require('fs');

const data = fs.readFileSync('notes.txt', 'utf8');
console.log(data);