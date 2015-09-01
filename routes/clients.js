var model = require('../model/model')
var RouteModel = require('../model/generic');
var defaults = require('../constants');
var name = defaults.names.client;
var typeStr = defaults.types.client;
var db = GLOBAL.db;


var route = new RouteModel(name, typeStr, false, false);

route.get = function (req, res, next) {
    var response = defaults.newResponse();
    var result = db.getCollection(name).data;
    //console.log(salesCol);
    //console.log(result);
    result.forEach(function (client) {
        //console.log(client);
        client.pending = 0;

        var sales = db.getCollection(defaults.names.sale).find({
            clienteID: client.$loki
        });

        sales.forEach(function (sale) {
            var pending = sale.Precio;
            sale.abonos.forEach(function (abono) {
                pending -= abono.cantidad;
            });
            client.pending += pending;
        });


        //client.pending = totalPending;
    });

    response.response = result;
    if (req.url.indexOf('/api/') > -1)
        res.send(response.response);
    else res.send(response);
}


module.exports = route;