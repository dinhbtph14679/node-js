// Buoc 1 include thu vien http
const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);

//router
const homeRoute = require('./routers/home');
const products = require('./routers/products');
const productsdetail = require('./routers/detailProduct');


const res = require('express/lib/response')

// su dung router
app.use(homeRoute);
app.use(products);
app.use(productsdetail);


// Buoc 2 khoi tao server
// const server = http.createServer((req, res) => {
//     console.log(req.url);
//     if (req.url === '/') {
//         // console.log("Home Page");
//         res.setHeader("Content-Type","text/html");
//         res.write(`
//         <h1>Home Page</h1>
//         `)
//         res.end();
//     };
//     if (req.url === '/products') {
//         // console.log("Products Page");
//         res.setHeader("Content-Type","text/html");
//         res.write(`
//         <h1>Product Page</h1>
//         `)
//         res.end();
//     };
// });

// Buoc 3 lang nghe cong thuc thi
server.listen(8000, () =>{
    console.log("Chay thanh cong");
});