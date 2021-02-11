var fs = require('fs');

var file_readed = fs.readFileSync('text.txt', 'utf8');
var message = "ДІАЛОГ\n" + file_readed;
fs.writeFileSync('output.txt', message);
