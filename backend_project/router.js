'use strict';

const HttpStatus = require('http-status-codes');
const routerMap = require('./routesMap').routerMap;
const urlKeyMap = require('./routesMap').urlKeyMap;

function routeHandler(request, response) {
  const req = getParams(request.url);
  const url = (req.param) ? urlKeyMap.get(req.newUrl) : req.newUrl;
  console.log(`${request.method}:${url}`);
  const handler = routerMap.get(`${request.method}:${url}`);

  if(handler){
    handler({
      response: response,
      request: request,
      params: req.param
    })
  }
  else {
    {
      response.statusCode = HttpStatus.NOT_FOUND;
      response.end("Not Found");
    }
  }
}

function getParams(url) {
  let param = url.match(/\d+/gm);

  if(param === null)
    return {
      newUrl: url,
      param: null
    };

  return {
    newUrl: url.replace(/\d/gm, '{param}'),
    param: param
  };
}

module.exports = routeHandler;
