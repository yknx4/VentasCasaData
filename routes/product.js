/*/products/*/
var model = require('../model/model')
var RouteModel = require('../model/generic');
var defaults = require('../constants');
var name = defaults.names.product;
var typeStr = defaults.types.product;



var route = new RouteModel(name,typeStr,false,false);

module.exports = route;

