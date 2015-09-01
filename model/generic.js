/*/products/*/

var model = require('./model')
var defaults = require('../constants');
var db = GLOBAL.db;

function GenericRoute(name, typeString, generatePut, generateDelete) {
    this.route = '/' + name;
    var cole = db.getCollection(name);
        if(cole === null) db.addCollection(name);
    //console.log(collection);

    this.get = function (req, res, next) {

        var response = defaults.newResponse();
        response.response = db.getCollection(name).data;
        if(req.url.indexOf('/api/') > -1)
        res.send(response.response);
        else res.send(response);
    }


    this.post = function (req, res) {

        if(req.url.indexOf('/api/') > -1){
            console.log(req.body);
        var response = db.getCollection(name).insert(req.body);
        res.send(response);
        return;
        }


        var response = defaults.newResponse();
        //console.log(req);      // your JSON
        //console.log(req.body);      // your JSON
        console.log(typeof req.body);
        if (req.body === null || !(typeof req.body === "string")) {
            var error = defaults.newError();
            error.code = 1;
            error.message = "Post data empty.";
            response.errors.push(error);
            res.send(response);
            return;
        }
        try {
            var prod = JSON.parse(req.body);
        } catch (e) {

            var error = defaults.newError();
            error.code = 2;
            error.message = "Post data is invalid";
            response.errors.push(error);
            response.response = req.body;
            res.send(response);
            return;
        }

        console.log(prod);
        if(Array.isArray(prod)){
          if (prod[0].type != typeString) {
              var error = defaults.newError();
              error.code = 3;
              error.message = "Post type wrong.";
              response.errors.push(error);
              res.send(response);
              return;
          }
        }
        else {
          if (prod.type != typeString) {
              var error = defaults.newError();
              error.code = 3;
              error.message = "Post type wrong.";
              response.errors.push(error);
              res.send(response);
              return;
          }
        }





        response.response = db.getCollection(name).insert(prod);
        res.send(response);
    }


    if(!generateDelete) this.del = null;
    if(!generatePut) this.put = null;

}






module.exports = GenericRoute;
