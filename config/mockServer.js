/* 一个简单的mock服务 */

const fs = require('fs');
const path = require('path');
const net = require('net');

const Koa = require('koa');
const chalk = require('chalk');
const app = new Koa();

const Router = require('koa-router');
const router = new Router();

const { router: mockRouter, util } = require('./util');
requireMockFiles();

portIsOccupied(3333, (err, port) => {

  router
    .use('/api', mockRouter.routes(), mockRouter.allowedMethods())
    .all('*', ctx => {
      ctx.status = 404;
      ctx.body = util.fail('访问的地址不存在', 404);
    });

  app
    .use(async (ctx, next) => {

      /* 模拟一个一秒内的延迟 */
      let randMs = Math.round(Math.random() * 1000);
      await util.delay(randMs);
      next();

    })
    .use(router.routes())
    .listen(port);


  app.on('error', err => {
    log.error('mock server error', err);
  });

  console.log('mock地址: ' + chalk.blue('http://localhost:' + port));
});

// 遍历文件列表
function readFileList(dir, filesList = []) {
  const files = fs.readdirSync(dir);
  files.forEach((item, index) => {
    var fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      readFileList(path.join(dir, item), filesList); //递归读取文件
    } else {
      filesList.push(fullPath);
    }
  });
  return filesList;
}

// require mock文件
function requireMockFiles() {
  let filesList = [];
  readFileList(path.join(__dirname, '../mock'), filesList);
  let mockFile = filesList.filter(v => {
    return /\w+\.js$/.test(v);
  });

  mockFile.forEach(v => {
    require(v);
  });
}

// 检测端口占用情况，如果占用会递归增加prot直到最后返回一个有效的prot
function portIsOccupied(port, cb) {
  // 创建服务并监听该端口
  var server = net.createServer().listen(port);

  server.on('listening', function() {
    // 执行这块代码说明端口未被占用
    server.close(); // 关闭服务
    cb(false, port);
  });

  server.on('error', function(err) {
    if (err.code === 'EADDRINUSE') {
      // 端口已经被使用
      portIsOccupied(port + 1, cb);
    }
  });
}
