const http = require('http')

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.setHeader('X-Powered-By', 'Node.js');

    const {method, url} = request;

    if (url === '/') {
        if(method === 'GET') {
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: 'Ini adalah homepage'
            }))
        }else{
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `Halaman tidak dapat diakses dengan method ${method}`
            }))
        }
    }else if (url === '/about') {
        if (method === 'GET') {
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: 'Halo, ini halaman about'
            }))
        }else if(method === 'POST') {
            let body = [];

            request.on('data', (chunk) => {
                body.push(chunk);
            });

            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const {name} = JSON.parse(body);
                response.statusCode = 200;
                response.end(JSON.stringify({
                    message: `Halo, ini halaman about, nama saya ${name}`
                }));
            })
        }else{
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `Halaman tidak dapat diakses dengan method ${method}`
            }));
        }
    }else{
        response.statusCode = 404;
        response.end(JSON.stringify({
            message: 'Halaman tidak ditemukan'
        }));
    }

    // if (method === 'GET') {
    //     response.end('<h1>Hello World</h1>');
    // }

    // if (method === 'POST') {
    //     let body = [];

    //     request.on('data', (chunk) => {
    //         body.push(chunk);
    //     });

    //     request.on('end', () => {
    //         body = Buffer.concat(body).toString();
    //         response.end(`<h1>Hello ${body}</h1>`);
    //     })
    // }
}

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
})