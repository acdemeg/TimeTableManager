'use strict';

const routerMap = require('./routesMap');

function routeHandler(request, response) {
  const req = getParams(request.url);

  const handler = routerMap.get(`${request.method}:${req.newUrl}`);
  if(handler){
    handler(response, request, req.param)
  }
  else {
    {
      response.statusCode = 404;
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

  console.log('param = ' + param);
  console.log(url.replace(/\d+/gm, '{param}'))

  return {
    newUrl: url.replace(/\d/gm, '{param}'),
    param: param
  };
}

module.exports = routeHandler;
