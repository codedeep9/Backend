const express = require('express');

const app = express();
const PORT = 8080;

const products = require('./data.json');

// routing

app.get('/', (req, res) => {
    res.send('Hi welcome to the shopping app..')
});

// hybrid api development
app.get('/api/products',(req,res)=>{
    res.json(products);
})

// default route
// app.get('*',(req,res)=>{
//     res.status(404).send('page not found');
// })

// route parameters
app.get('/api/products/:id',(req,res)=>{
    const id=Number(req.params.id)
    const product=products.find((product)=>{
        return product.id==id
    })
    res.send(product.product_name);
})
// server side rendering

app.get('/products', (req, res) => {
    const html = `<ul>${products.map((product) => {
        return `<li>${product.product_name}</li>`
    })}
    </ul>`
    res.send(html);
})




app.listen(PORT, () => {
    console.log(`server running at port ${PORT}`)
})
