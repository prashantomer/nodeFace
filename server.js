// Routing Functionality -----------------------------
  var http = require('http');
  var nodeFace = require('./app')

  http.createServer(nodeFace.handleRequest).listen(3030);
// -----------------------------------------------

// Render HTML File Functionality -----------------------------
  // var http = require('http');
  // var fs = require('fs');

  // function nodeFace(request, response) {
  //  response.writeHead(200, {'Content-Type': 'text/html'});
  //  fs.readFile('./index.html', null, function(error, data) {
  //    if (error) {
  //      response.writeHead(404, {'Content-Type': 'text/plain'});
  //      response.write('File not found');
  //    } else {
  //      response.write(data);
  //    }
  //    response.end();
  //  })
  //  // response.end();
  // }

  // http.createServer(nodeFace).listen(3030);
// -----------------------------------------------

// Basic Functionality -----------------------------
  // var http = require('http');
  // var newModule = require('./basic/newModule');
  // var containerModule = require('./basic/containerModule')

  // function nodeFace(request, response) {
  //  response.writeHead(200, {'Content-Type': 'text/plain'});
  //  response.write('<h1>Wellcome to NodeFace!</h1>\n')
  //  response.write(newModule.newModuleString);
  //  newModule.newModuleFunction();
  //  response.write(containerModule.containerModuleString);
  //  containerModule.containerModuleFunction();
  //  response.end();
  // }

  // http.createServer(nodeFace).listen(3030);
// -----------------------------------------------
  