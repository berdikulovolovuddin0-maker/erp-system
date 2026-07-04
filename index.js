const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.static(__dirname));

let stock = [];

// Asosiy sahifa
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Mahsulot qo'shish
app.post("/add", (req, res) => {
    stock.push(req.body);
    res.json(stock);
});

// Omborni ko'rish
app.get("/stock", (req, res) => {
    res.json(stock);
});

// Render uchun PORT
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`SERVER ISHLADI. Port: ${PORT}`);
});