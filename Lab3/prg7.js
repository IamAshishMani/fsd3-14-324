import http from "http"
import { readFile } from "fs/promises"

const server = http.createServer(async (req, res) => {
    if(req.url === "/normal"){
        const text = await readFile("./big.txt", "utf-8")   
        res.end(text)
    } else if(req.url === "/stream"){
        const stream = createReadStream("./big.txt", "utf-8")
        stream.pipe(res)
    }
})


server.listen(3000, () => {
    console.log("server is up")
})