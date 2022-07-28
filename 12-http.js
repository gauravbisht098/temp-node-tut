const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Welcome to our Home Page.')
    }
    if(req.url==='/about'){
        res.end('Here is our short History')
    }

    res.end(`
        <h1>Oops!</h1>
        <p>We Can't Seem to find the page you are looking for</p>
        <a href='/'>Back Home</a>
    `)
})
server.listen(5000)
// const server = http.createServer((req,res) => {

//     console.log(req);
//     res.write('Welcome to our Home page');
//     res.end();
// })


