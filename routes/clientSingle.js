/*/products/*/
var model = require('../model/model')
var RouteModel = require('../model/genericSingle');
var defaults = require('../constants');
var name = defaults.names.client;
var typeStr = defaults.types.client;


var route = new RouteModel(name,typeStr,true,true);

module.exports = route;

