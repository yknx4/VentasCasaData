var constants = {};

constants.newResponse = function () {
    return {
        status: 200,
        message: "Success",
        errors: [

    ],
        response: null
    }

}

constants.newError = function () {
    return {
        code: 0,
        message: ""
    };
}

constants.apiRoute = '/api';
constants.names={};
constants.names.product = 'product';
constants.names.client = 'client';
constants.names.sale = 'sale';

constants.types = {};
constants.types.product = 'Product';
constants.types.client = 'Client';
constants.types.sale = 'Sale';

module.exports = constants;