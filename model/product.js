var defaults = require('../constants');
function Product() {
	this.name = '';
	this.brand= '';
	this.model= '';
	this.cost= 0;
	this.price= 0;
	this.color= '';
	this.image= '';
	this.description= '';
	this.type = defaults.types.product
}

module.exports = Product;
