var defaults = require('../constants');
var route = {
    get: null,
    post: null,
    put: null,
    del: null,
    route: '/'+defaults.names.sale+'/client/:clienteid'
};

/*http://json.servidor.com/sales/cliente/:clienteid [GET] Obtiene la colección de todas las Compras del cliente :clienteid  [Redirects to: /sales/clienteID/:clienteid]*/

route.get = function (req, res, next) {
    res.header('Location', '/'+defaults.names.sale+'/clienteID/' + req.params.clienteid);
    res.send(302);
}

module.exports = route;