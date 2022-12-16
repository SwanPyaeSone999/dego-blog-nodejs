const http = require('http');
const fs = require('fs');
const _ = require('lodash')
const server  = http.createServer((req,res) => {
    console.log(req.url);
    //set header
    res.setHeader('Content-Type', 'text/html');

    //generate ramdom number 
    const num = _.random(0,20);
    console.log(num);

    //define path
    let path = '';
    if(req.url == '/'){
        path += './views/index.html'
    }else{
        path += './views' + req.url + '.html';
    }
    

    //send html file to browser
    fs.readFile(path , (err,data) => {
        if (err) {
            console.log(err);
        }else{
            res.write(data);
            res.end();
        }
    })
})


server.listen(3000,'localhost',() => {
    console.log('server listing');
})