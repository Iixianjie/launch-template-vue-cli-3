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
    msg,
  })
};

module.exports = {
  util,
  router: new Router() 
};
