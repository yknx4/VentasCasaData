/*/products/*/
var db = GLOBAL.db;
var model = require('./model')
var defaults = require('../constants');

function GenericAccesor(name) {

    this.route = '/' + name + '/:parame/:value';

    var cole = db.getCollection(name);
        if(cole === null) db.addCollection(name);


    this.get = function (req, res, next) {
        var response = defaults.newResponse();

        var par = req.params.parame;
        var vale = req.params.value;
        console.log(par + ' ' + vale);
        var query = {};
        Object.defineProperty(query, par, {
            value: vale,
            writable: true,
            enumerable: true,
            configurable: true
        });

        var qu = db.getCollection(name).find(query);
        //console.log(qu);
        response.response = qu;


        res.send(response);
    }

    this.del = null;
    this.put = null;
    this.post = null;

}






module.exports = GenericAccesor;