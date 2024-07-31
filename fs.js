const fs=require('fs');

// read file in synchronus

// const file1Data=fs.readFileSync('f1.txt','utf-8');
// console.log(file1Data)

// read file in asynchronous way : this takes a callback

// fs.readFile('f1.txt', 'utf-8',(err,data)=>{
//     if (err){
//         console.log(err)
//     }
//     console.log(data)
// })

// writing a file
const content='Hi, my name is Saideep'
fs.writeFileSync('f2.txt',content);

file2Data=fs.readFileSync('f2.txt','utf-8');
console.log(file2Data)

//appendfile content
fs.appendFileSync('f2.txt', " iam a software engineer")

fs.appendFile('f4.txt','this is a dummt data..XDXDXD',(err)=>{
    if (err){
        console.log(err)
    }
    console.log('file appended')
})

// writing in sync and async manner
fs.writeFile('f3.txt',' ...appending new content xdxdxdxd',(err)=>{
    if (err){
        console.log(err)
    }
    console.log('file written')

});