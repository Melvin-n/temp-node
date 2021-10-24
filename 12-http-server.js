//http module
const { readFile } = require('fs');
const http = require('http');

//set up server const using createserver method, pass in function with 
//2 parameters (request, response)
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our homepage')
    }
    else if (req.url === '/about') {
        res.end('stuff about us')
    }
    else {
    res.end(`<h1> Oops! you went the wrong way
    <a href='/'>Go back</a>`)
    }
})

//what port is the server listening too
//localhost:5000
server.listen(5000)