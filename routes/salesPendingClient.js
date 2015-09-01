var defaults = require('../constants');
var name = defaults.names.sale;

var route = {
    get: null,
    post: null,
    put: null,
    del: null,
    route: '/'+defaults.names.sale+'/client/:id/pending'
};

/*http://json.servidor.com/sales/cliente/:clienteid [GET] Obtiene la colección de todas las Compras del cliente :clienteid  [Redirects to: /sales/clienteID/:clienteid]*/

route.get = function (req, res, next) {
    var response = defaults.newResponse();
        var vale = parseInt(req.params.id);
        //console.log('ID: '+vale);

        var qu = db.getCollection(name).find({clienteID:vale,Pagado:false});
        qu.forEach(function(item){
            item.pending = item.Precio
            item.abonos.forEach(function (abono) {
                item.pending -= abono.cantidad;
            });
            if(item.pending <=0){
                item.Pagado = true;
                db.getCollection(name).update(item);
            }
        });

        //console.log(qu);
       response.response = qu;

        if (req.url.indexOf('/api/') > -1)
        res.send(response.response);
    else res.send(response);
}

module.exports = route;
