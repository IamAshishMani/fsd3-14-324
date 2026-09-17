import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/about", (req, res) => {
  res.send("Mid FSD Dev")});

app.post('/login',(req, res) => {
  res.send({msg: 'user login'})
});

app.put('/user/update/1',(req, res) => {
  res.send({msg: 'user update'})
});

app.delete('/users/1', (req, res) => {
  res.send({msg: 'user delete'})
});
app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(3000, () => {
  console.log(`Server is running...`);
});

