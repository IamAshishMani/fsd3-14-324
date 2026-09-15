import http from 'http';
import { createReadStream } from 'fs';


const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const stream = createReadStream('./airtag.html', 'utf-8');
        stream.pipe(res);
    } 
    else if(req.url === '/product' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const stream = createReadStream('./data/product.html', 'utf-8');
        stream.pipe(res);
    }

    else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});


server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
})