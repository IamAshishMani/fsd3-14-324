import http from "http"
const server = http.createServer((req, res) => {
    console.log(req.url)
    if(req.url == '/product') { 
        res.end("<h1>Product page</h1>")
    }else if(req.url == '/cart') {
        res.end("<h1>Cart page</h1>")
    }else if(req.url == '/checkout') {
        res.end("<h1>Checkout page</h1>")
    }else {
        res.statusCode = 404;
        res.end("Page not found")
    }
})