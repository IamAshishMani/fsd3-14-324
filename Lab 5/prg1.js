import express from express

const port = 3333;
const app = express();

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

app.get("/", (req, res) => {
    res.sendFile(path.join(dirname), "index.html");
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(dirname),"public", "about.html");
});

app.get("/enquiry", (req, res) => {
    res.sendFile(path.join(dirname), "public", "enquiry.html");
})
app.listen(port, () => console.log("prg is running at", { port }));