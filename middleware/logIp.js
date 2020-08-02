module.exports = function logIp(req, res, next) {
  // grab authentication token from req header
  console.log(req.ip.split(':').pop());

  next();
};