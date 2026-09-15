import http from "http"

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html")
    if(req.url =='/') {
        res.end("Welcome to server")
    } else if(req.url == '/about') {
        res.end("Welcome to about page")
    } else if(req.url == '/product') {
        res.end(`
            <h1>Product Page</h1>
            <p>This is the product page.</p>

            <ul>
                <li>Product 1</li>
                <li>Product 2</li>
                <li>Product 3</li>
            </ul>
        `)
    } else {
        res.statusCode = 404;

        res.end(`
            <h1>404</h1><p>Page not found</p>
            <a href="/">Back to Home</a>
            `)
    }
})



server.listen(3000, () => {
    console.log("server is up")
})