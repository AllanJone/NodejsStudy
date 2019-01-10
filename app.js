var fs = require('fs');

var readMe = fs.readFileSync('readmee.txt','utf8');
console.log(readMe);
fs.writeFileSync('writemee.txt',readMe);