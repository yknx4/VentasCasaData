/*{
  "fecha= "2015-02-01T06:00:00.000Z";
  "clienteID= 0;
  "ProductoID= 0;
  "Pagado= false;
  "enAbonos= true;
  "abonoCantidad" :0;
  "diasDisponibles= [0;1;2;3;4;5;6];
  "horariosDisponible= ["2015-02-01T21:00:00.000Z"];
  "frecuenciaAbonoDias= 0;
  "abonos= [{
      "cantidad= 0;
      "fecha= "2015-02-01T06:00:00.000Z"
  }]
}
*/
var defaults = require('../constants');
function Sale() {
  this.fecha= Date.now();
  this.clienteID= 0;
  this.ProductoID= 0;
  this.Precio = 0;
  this.Pagado= false;
  this.enAbonos= false;
  this.abonoCantidad=0;
  this.diasDisponibles= [];
  this.horariosDisponible= [];
  this.frecuenciaAbonoDias= 0;
  this.abonos= [];
    this.type = defaults.types.sale
}

module.exports = Sale;
