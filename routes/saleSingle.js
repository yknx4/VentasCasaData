/*/products/*/

var model = require('../model/model')
var RouteModel = require('../model/genericSingle');
var defaults = require('../constants');
var name = defaults.names.sale;
var typeStr = defaults.types.sale;



var route = new RouteModel(name,typeStr,true,false);

module.exports = route;

