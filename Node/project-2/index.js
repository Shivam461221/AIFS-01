const http = require('http');
//hypet text transfer protocol - protocol responssible for transferring html, files, images , web files 
// it is the foundation of world wide web

const server = http.createServer((req, res)=>{
    console.log('Request received');
    if(req.url==='/' && req.method === 'GET'){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.end('<h1>Hello base page</h1>');
    }
     else if (req.url === '/api/users' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Hello user</h1>');
    }
    else if (req.url === '/api/about' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>About page</h1>');
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h1>Page not found</h1>');
    }
});

server.listen(6000, ()=>{
    console.log('Server is running on port 6000')
});