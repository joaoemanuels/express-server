import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>")
});

app.get("/about", (req, res) => {
  res.send("<h1>Sobre mim</h1>")
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contatos</h1>")
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});