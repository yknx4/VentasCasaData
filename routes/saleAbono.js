///sales/:id/abonar/:cantidad//

var defaults = require('../constants');
var name = defaults.names.sale;

var route = {
    get: null,
    post: null,
    put: null,
    del: null,
    route: '/'+defaults.names.sale+'/:id/abonar/:cantidad'
};

/*http://json.servidor.com/sales/cliente/:clienteid [GET] Obtiene la colección de todas las Compras del cliente :clienteid  [Redirects to: /sales/clienteID/:clienteid]*/

route.post = function (req, res, next) {
    var response = defaults.newResponse();
    var vale = parseInt(req.params.id);
    var payment = parseFloat(req.params.cantidad);
    //console.log('ID: '+vale);
    var sale = db.getCollection(name).get(vale);
    if (sale === null) {
        var error = defaults.newError();
        error.code = 33;
        error.message = "Sale doesn't exist";
        response.errors.push(error);
        response.response = req.params;
        res.send(response);
        return;
    }
    if (!sale.enAbonos) {
        var error = defaults.newError();
        error.code = 31;
        error.message = "You cannot pay to this sale";
        response.errors.push(error);
        response.response = req.body;
        res.send(response);
        return;
    }
    var pending = sale.Precio;
    sale.abonos.forEach(function (abono) {
        pending -= abono.cantidad;
    });
    if (payment>pending) {
        var error = defaults.newError();
        error.code = 32;
        error.message = "You cannot pay more than you owe";
        response.errors.push(error);
        response.response = req.body;
        res.send(response);
        return;
    }
    var abono = {cantidad:payment,fecha:Date.now()};
    
    sale.abonos.push(abono);
    //console.log(qu);
    response.response = db.getCollection(name).update(sale);
    res.send(response);
    
}

module.exports = route;