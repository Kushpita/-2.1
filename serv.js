var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
  res.end('Вася: Привіт. Який стан авто? Микола:Вася: Не дуже - іржаве корито.Петро:Микола:Вася: то навіщо його брати?');
});

server.listen(3000, '192.168.1.104');
console.log("Ми відслідковуємо порт 3000");
