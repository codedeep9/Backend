const express=require('express');

const app=express();

app.get('/',(req,res)=>{
    return res.send('<h1>This is home page</h1>')
})
app.get('/products',(req,res)=>{
    console.log(req)
    return res.send('<h1>This is products page</h1>' +" "+req.query.shoes)
})
app.get('/contact',(req,res)=>{
    return res.send('<h1>This is contact page</h1>')
})


app.listen(8086, ()=>{
    console.log('server is running...')
})
