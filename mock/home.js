const { util, router } = require('../config/util');
const { Random } = require('mockjs');

router.get('/', (ctx, next) => {
  ctx.body = util.success({
    name: '当前目录: /'
  });
});

router.get('/user', ctx => {
  ctx.body = util.success({
    nickname: 'lixianjie',
    cname: Random.cname(),
    join_date: Random.date(),
    desc: Random.paragraph(),
    address: Random.county(true),
    avatar: Random.image('200x200'),
    age: 24,
    sex: 1,
    job: 'coder'
  });
});

router.post('/post', ctx => {
  ctx.body = util.success(ctx.request.body);
});