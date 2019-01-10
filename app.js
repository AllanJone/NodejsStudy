var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream('readMe.txt');

myReadStream.on('data',function(chunk){
    console.log(('new chunked received' + chunk));
      
});


// var server = http.createServer(function(req,res){
//     console.log('The request was made using the url : ' + req.url);
//     res.writeHead(200,{'Content-Type': 'text/plain'});
//     res.end('Hey fellow ninjas');
// });

// server.listen(3000,'127.0.0.1');
// console.log('Yo dogs, you are now listening to port 3000');