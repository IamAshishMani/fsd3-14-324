import express from "express";
import { products } from "./data.js";
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/api/products", (req, res) => {
    const {description, rating, ...rest} = products[0];
    const filterProducts = products.map((product) => {
        const {description, rating, ...rest} = product;
        return rest;
    });
    res.json({count: filterProducts.length, data: filterProducts});
});

app.get("api/products/:id", (req, res) =>{
    const {id} = req.params;
    const product = product.find((item) => item.id == id);

    if(!product){
        return res.status({msg: `product not found with id:${id}`})
    }
    else{
        return res.status(200).json(product);
    }
});

app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000")
    });