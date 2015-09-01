/*/products/*/
var db = GLOBAL.db;
var model = require('./model')
var defaults = require('../constants');

function GenericRouteSingle(name, typeString, generatePut, generateDelete) {

    this.route = '/' + name + '/:id';
    var cole = db.getCollection(name);
        if(cole === null) db.addCollection(name);


    this.del = function (req, res) {

        var response = defaults.newResponse();
        var vale = parseInt(req.params.id);
        db.getCollection(name).remove(vale);

        res.send(response);
    }

    this.get = function (req, res, next) {

        var response = defaults.newResponse();
        console.log(typeof req.params.id);
        if(req.params.id === 'undefined' || req.params.id === null || req.params.id ==''){
            res.header('Location', '/'+name);
            res.send(302);
            return;
        }
        var vale = parseInt(req.params.id);
        //console.log('ID: '+vale);
        var qu = db.getCollection(name).get(vale);
        //console.log(qu);
       response.response = qu;


       if (req.url.indexOf('/api/') > -1)
       res.send(response.response);
   else res.send(response);
    }

    this.put = function (req, res) {
        var response = defaults.newResponse();
        //console.log(req);      // your JSON
      //  console.log(req.body);      // your JSON
        console.log(typeof req.body);
        if(req.url.indexOf('/api/') > -1){
            console.log(req.body);
        response.response = db.getCollection(name).update(req.body);
        res.send(response);
        return;
        }


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
            error.message = "Put data is invalid";
            response.errors.push(error);
            response.response = req.body;
            res.send(response);
            return;
        }

        console.log(typeof prod);

        if (prod.type != typeString) {
            var error = defaults.newError();
            error.code = 3;
            error.message = "Put type wrong.";
            response.errors.push(error);
            res.send(response);
            return;
        }
        var older =db.getCollection(name).get(req.params.id);

        prod.meta = older.meta;
        prod.$loki = older.$loki;

       db.getCollection(name).update(prod);
        response.response = prod;
        res.send(response);
    }


     if(!generateDelete) this.del = null;
     if(!generatePut) this.put = null;
    this.post = null;

}






module.exports = GenericRouteSingle;
