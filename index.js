const express = require("express");

const app = express();
app.use(express.json());

let stock = [];

app.get("/", (req,res)=>{
res.send("ERP ISHLAYAPTI 🚀");
});

app.post("/add",(req,res)=>{
stock.push(req.body);
res.json(stock);
});

app.get("/stock",(req,res)=>{
res.json(stock);
});

app.listen(3000, ()=>{
console.log("SERVER ISHLADI");
});
const path = require("path");

app.get("/", (req,res)=>{
  res.sendFile(path.join(__dirname, "index.html"));
});