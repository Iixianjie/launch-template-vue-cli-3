const Router = require('koa-router');

const util = {
  success: (data = null, msg = '') => ({
    errno: 0,
    data,
    msg
  }),
  fail: (msg = '', errno = -1, data = null) => ({
    errno,
    data,
    msg
  }),
  delay(ms) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res();
      }, ms);
    });
  }
};

module.exports = {
  util,
  router: new Router()
};
