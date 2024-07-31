const http=require('http');
const fs=require('fs');
const url=require('url');
myServer=http.createServer((req,res)=>{
    // res.end('Bye from server :)')
    // console.log(req.url)
    const log=`${req.url} log created\n`;
    const parsedUrl=url.parse(req.url,true);
    console.log(parsedUrl); 

    fs.appendFile('logs.txt',log,(err)=>{
        if (err){
            console.log(err);
        }
        switch(req.url){
            case "/":
                res.end("This is home page..");
            break
            case "/about":
                res.end("This is about page..");
            break
            case "/contact":
                res.end("This is contact page");
            break;
            default:
                res.end("Hello please enter valid url")
        }

    })
    
});

myServer.listen(8000,()=>{
    console.log('server started on 8000 port');
})
