const express = require("express");

const fs = require("fs");

const app = express(); //Handler function

const products = require("./mock_data.json");

app.listen(8001, () => {
  console.log("server is running at port 8001");
});

// middleware
app.use(express.urlencoded())
app.use(express.json())

// Routing
app.get("/", (req, res) => {
  res.send("Hi Onkar....Welcome to our demo session....");
});

// Hybrid API developement means same API can access in cross platform devices...
app.get("/api/products", (req, res) => {
  res.json(products);
});

// Server side rendering - When we rendering a complete html from your server
app.get("/product", (req, res) => {
  const html = `<ul> ${products.map(
    (product) => `<li> ${product.product_name} <\li>`
  )}</ul>`;

  res.send(html);
});

// Route paramters...get some data based on id
app.get("/api/products/:id", (req, res) => {
  // console.log(req.params.id)

  const id = Number(req.params.id);

  const product = products.find((x) => x.id === id);
  return res.json(product);
});

// post put delete

// Post Method
app.post("/api/AddProduct", (req, res) => {
  console.log(req.body)
  const newData = req.body;
  products.push({ id: products.length + 1, ...newData });
  fs.writeFile("./mock_data.json", JSON.stringify(products), (err, data) => {
    if (err) {
        return res.send(err)
    }
    return res.send({ status: "Successfully created", id: products.length });
  });
});


// PUT
app.put('/api/products/:id', (req, res) => {
    const id = Number(req.params.id);
    const body = req.body

    const productIndex = products.findIndex((x) => x.id === id);

    products[productIndex] = {id: id, ...body}

    fs.writeFile("./mock_data.json", JSON.stringify(products), (err, data) => {
        if (err) {
            return res.send(err)
        }
        return res.json({ status: "Successfully updated", id: products.length });
      });
})

// Delete
app.delete('/api/DeleteProduct/:id', (req, res) => {
    const id = Number(req.params.id)
    
    const productIndex = products.findIndex((x) => x.id === id);

    products.splice(productIndex, 1)

    fs.writeFile("./mock_data.json", JSON.stringify(products), (err, data) => {
        if (err) {
            return res.status(500).json({ status: 'error', message: "internal 500 server error" })
        }
        return res.json({ status: "deleted Successfully", id: products.length });
      });
})