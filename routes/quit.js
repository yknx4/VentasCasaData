/* GET home page. */
var route = {
    get: null,
    post: null,
    put: null,
    del: null,
    route: '/quit'
};

route.get = function (req, res, next) {
   
    GLOBAL.db.save();
    process.exit();
}

module.exports = route;