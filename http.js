const http=require('http');
myServer=http.createServer((req,res)=>{
    console.log('server started...')
    res.end('Hello from server :)')
});

myServer.listen(8000,()=>{
    console.log('server started on 8000 port');
})


