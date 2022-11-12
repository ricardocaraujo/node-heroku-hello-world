const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", function(req, res) {
    res.send("Hello  world")
})

app.listen(port, () => {
    console.info(`Aplicação rodando em http://localhost:${port}`)
})