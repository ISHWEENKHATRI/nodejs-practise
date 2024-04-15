const http=require('http');
const fs=require('fs');

const myServer=http.createServer((req,res)=>{
    const log=`${Date.now()}.${req.url}\n`;
    fs.appendFile('./errorlog.txt',log,(err)=>{
        if(err)
        {
            console.log(err);
        }
    })    
    res.end("Hello")
})
myServer.listen(3000,()=>{
    console.log("Server Started");
})