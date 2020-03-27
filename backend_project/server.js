'use strict';

const http = require('http');
const server = new http.Server();
const url = require('url');
const router = require('./router');

if(server) {
  console.log(`Server is running on [localhost]:[3000]`);
}
else {
  console.log(`Server do not running on [localhost]:[3000] !!!`);
}

server.on('request', (request, response) => {
     router(request, response);
});

server.listen(3000, '127.0.0.1');
