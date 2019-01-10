var fs = require('fs');

// fs.unlinkSync('writeMe.txt');

// fs.mkdirSync('stuff');

fs.rmdirSync('stuff');

fs.mkdir('stuff',function(){
    fs.readFile('readMe.txt', 'utf8',function(err, data){
        console.log('Before Writing');
        fs.writeFileSync('./stuff/writeMe.txt',data);
        console.log('After Writing');
    });
});