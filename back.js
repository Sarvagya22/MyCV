const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('./index.html')
const about = fs.readFileSync('./About.html')
const project = fs.readFileSync('./Projects.html')
const contact = fs.readFileSync('./Contact.html')
let style = fs.readFileSync('./style.css')

const server = http.createServer((req, res)=>{
    console.log(req.url);
    url = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(url == '/'){
        res.end(home);
    }
    else if(url == 'About'){
        res.end(about);
    }
    else if(url == 'Projects'){
        res.end(project);
    }
    else if(url == 'Contact'){
        res.end(contact);
    }
    else{
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });