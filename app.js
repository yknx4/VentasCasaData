


var relRoutesDir = '../routes/'; //THIS IS RAN UNDER /bin/www so the paths must be relative to /bin
var routesDir = './routes/';
//var routes = require('./routes/index');
var fs = require('fs');

var restify = require('restify');

var app = restify.createServer({
  name: 'Sales',
  version: '1.0.0'
});
app.use(restify.acceptParser(app.acceptable));
app.use(restify.queryParser());
app.use(restify.bodyParser());



fs.readdir(relRoutesDir,function(err,files){
    if(err) throw err;
    files.forEach(function(file){
      var route = require(routesDir + file);
      if (!(route.get === null && typeof route.get === "object")) {
        app.get(route.route, route.get);
      }
      if (!(route.post === null && typeof route.post === "object")) {
        app.post(route.route, route.post);
      }
      if (!(route.put === null && typeof route.put === "object")) {
        app.put(route.route, route.put);
      }
      if (!(route.delete === null && typeof route.delete === "object")) {
        app.delete(route.route, route.delete);
      }
    });
 });


//app.get(routes.get_route, routes.get);



module.exports = app;
