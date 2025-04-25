import http from "http";

const port=400;

const server = http.createServer( (req,res)=>{

    res.statusCode =200;
    res.setHeader('content-Type','text/plain');
    res.end("Hello welcome here on this server");
});
server.listen(port, ()=>{

    console.log(`Server is running on http//:localhost:${port}`);

})

