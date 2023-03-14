const http = require('http');

const server = http.createServer((req,res)=>{
    //request and response
    if(req.url === '/'){
        res.end('this is not fun at all because I am struggling')
    }
    if(req.url === '/about'){
        res.end('This is the about page of this website')
    }
    res.end(`
    <h1>oops </h1> 
    <a href="/">go back home</a>
    `)
})

server.listen(5000)