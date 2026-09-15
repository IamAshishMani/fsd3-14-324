import http from "http"
import {getAllTeams} from "./teams.js"
import {parse as parseUrl} from "url"

const parseJsonBody = (req) => {
    return new Promise((resolve, reject) => {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        });
        req.on("end", () => {
            try {
                const jsonBody = JSON.parse(body);
                resolve(jsonBody);
            } catch (error) {
                reject(error);
            }
        });
    });
}

const server = http.createServer((req, res) => {

    res.setHeader("Content-Type", "text/html")

    const {pathname, query} = parseUrl(req.url, true);
    const {method} = req;

    

    if(pathname === "/api/v1/teams" && req.method === "GET") {
        const teams = getAllTeams();
        res.sendJson(res, 200, teams);

    } if(pathname === "/api/v1/teams" && req.method === "POST") {
        parseJsonBody(req).then((body) => {
        }).catch((error) => {
            res.statusCode = 400;
            res.end();
        });
    } 
    else {
        res.statusCode = 404;
    }

    res.end();

})


const PORT = 3000;

server.listen(PORT, () => {
    console.log(`server is up on port ${PORT}`)
})


