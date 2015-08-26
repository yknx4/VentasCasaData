

/* GET home page. */
var route = {
  get: null,
  post: null,
  put: null,
  delete: null,
  route: '/echo/:name'
};

route.get = function (req, res, next) {
  res.send(req.params);
}

module.exports = route;