/*/products/*/

var model = require('../model/model')
var RouteModel = require('../model/genericSingle');
var defaults = require('../constants');
var name = defaults.names.product;
var typeStr = defaults.types.product;



var route = new RouteModel(name,typeStr,true,true);

module.exports = route;

