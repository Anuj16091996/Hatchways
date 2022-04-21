const client = require("../config/redis.config");

exports.cacheRouteOne = (req, res, next) => {
  client.get("ping", (err, data) => {
    console.log("data of ping");
    console.log(data);
    if (err) throw err;
    if (data != null) {
      res.json({
        postss: JSON.parse(data),
      });
    } else {
      next();
    }
  });
};
