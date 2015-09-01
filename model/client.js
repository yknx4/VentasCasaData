var defaults = require('../constants');
function Client() {
    this.name="";
    this.email="";
    this.image="";
    this.phone=0;
    this.address="";
  	this.addressGPS={
    		longitude:0,
    		latitude:0
  		};
  	this.enabled= true;
	this.type = defaults.types.client
}

module.exports = Client;