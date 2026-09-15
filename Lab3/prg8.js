import http from "http"
import { readFile } from "fs/promises"
import {createReadStream} from "fs"

const server = http.createServer(async (req, res) => {
    if(req.url === "/normal"){
        const text = await readFile("./big.txt", "utf-8")   
        res.end(text)
    } else if(req.url === "/stream"){
        const stream = createReadStream("./big.txt", "utf-8")
        stream.pipe(res)
        res.end()
    }else if (req.url === "/product") {
        res.setHeader("Content-Type", "text/html");
        const data=createReadStream("./product.html", "utf-8");
        data.pipe(res);
    }
})

server.listen(3000, () => {
    console.log("server is up")
})