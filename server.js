// const http = require('http');
// http.createServer((req, res) => {
// res.writeHead(200, {
// 'Content-Type': 'text/plain'
// });
// res.end('Hello World');
// }).listen(3000);


// console.log('Server running at http://localhost:3000/');

// const connect = require('connect');
// const app = connect();
// app.listen(3000);
// console.log('Server running at http://localhost:3000/');

// const connect = require('connect');
// const app = connect();
// app.listen(3000);

// function logger(req, res, next){
//     console.log(req.method, req.url);
//     next();
// }

// function helloWorld(req, res, next) {
// res.setHeader('Content-Type', 'text/plain');
// res.end('Hello World');

// };
// function goodbyeWorld(req, res, next) {
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Goodbye World');
// }


// app.use(logger);
// app.use('/hello', helloWorld);
// app.use('/goodbye', goodbyeWorld);



// console.log('Server running at http://localhost:3000/');

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World new')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

console.log('Server running at http://localhost:3000/');

