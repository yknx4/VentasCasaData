/* GET home page. */
var RouteModel = require('../model/genericAccesor');
var defaults = require('../constants');
var name = defaults.names.client;

var route = new RouteModel(name);

module.exports = route;