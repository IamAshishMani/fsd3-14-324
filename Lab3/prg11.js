import http from 'http';

const server = http.createServer((req, res) => {
    console.log(`Received request: ${req.method} ${req.url}`);


    if(req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Welcome to the Home Page</h1>');
    } 
    else if(req.url === '/product' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/json' });
        res.end(JSON.stringify({ name: 'Product Name', price: 100 }));

    } 
    else if(req.url === '/product' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const product = JSON.parse(body);
            res.writeHead(201, { 'Content-Type': 'text/json' });
            res.end(JSON.stringify(product));
        });
    }
    else if(req.url === '/product' && req.method === 'PUT') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const product = JSON.parse(body);
            res.writeHead(200, { 'Content-Type': 'text/json' });
            res.end(JSON.stringify(product));
        });
    }
    else if(req.url === '/product' && req.method === 'DELETE') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Product deleted');
    }
    else {
        res.statusCode = 404;
        res.end('Not Found');
    }

});


server.listen(3000, () => {
    console.log('prg11 is running on http://localhost:3000');
})