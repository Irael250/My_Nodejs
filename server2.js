
const http = require('http');
const port=300;

  const server=  http.createServer((req,res)=>{
     
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end('<h1>Hello welcome to our server brother!</h1>');

 
})
server.listen(port,()=>{
    console.log(`The server is running on ${port}`);
});