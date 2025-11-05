const http=require('http')

const server=http.createServer((req,res)=>
{
    res.writeHead(200,{'content-type':'text/plain'});
    res.write('Hi!,welcome to Node js');
    res.end();
});

server.listen(6969,()=>{
    console.log("server is running at :http://localhost:6969/");
})