import express from express

const port = 3333;
const app = express();

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

app.use(express.static(path.join(dirname, "prontend")));

app.use((req, res) => {
    res.status(404).sendFile(path.join(dirname, "public", "404.html"));
});

app.listen(port, () => console.log("prg is running at", { port }));