import http from "http"

const server = http.createServer((req, res) => {
    console.log("request event");
    console.log(req.url, req.method);

    console.log(req.headers);

    console.log(req.headers.host)

    res.write("Welcome ot server")
    res.end()
})



server.listen(3000, () => {
    console.log("server is up")
})