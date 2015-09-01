
var model = require('../model/model')
var RouteModel = require('../model/generic');
var defaults = require('../constants');
var name = defaults.names.sale;
var typeStr = defaults.types.sale;


var route = new RouteModel(name,typeStr,false,false);

module.exports = route;

