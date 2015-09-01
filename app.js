var db = GLOBAL.db;


var defaults = require('./constants');
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
app.use(restify.CORS());
app.use(restify.fullResponse());

var genericRoutes = [];

fs.readdir(relRoutesDir, function (err, files) {
    if (err) throw err;
    files.forEach(function (file) {
        var route = require(routesDir + file);
      //  console.log(file);
       // console.log(JSON.stringify(route));
    //    console.log('route get: '+typeof route.get);
        if (!(route.get === null && typeof route.get === "object")) {
            app.get(route.route, route.get);
            app.get(defaults.apiRoute+route.route, route.get);
        }
      //  console.log('route post: '+typeof route.post);
        if (!(route.post === null && typeof route.post === "object")) {
            app.post(route.route, route.post);
            app.post(defaults.apiRoute+route.route, route.post);
        }

        //console.log('route put: '+typeof route.put);
        if (!(route.put === null && typeof route.put === "object")) {
            app.put(route.route, route.put);
            app.put(defaults.apiRoute+route.route, route.put);
        }
    //    console.log('route del: '+typeof route.del);
        if (!(route.del === null && typeof route.del === "object")) {
           app.del(route.route, route.del);
            app.del(defaults.apiRoute+route.route, route.del);
        }
    });
});
//app.get(routes.get_route, routes.get);



module.exports = app;
