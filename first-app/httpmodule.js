const http=require('http');

// const server=http.createServer();

// server.on('connection',(socket)=>{
//     console.log('new connection');
// });

const server=http.createServer((req,res)=>
{
    if(req.url==='/')
    {
        res.write('hello world');
        res.end();
    }

    if(req.url==='/api/cources')
    {
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});
server.listen(1600);

console.log('listening to 1600...');