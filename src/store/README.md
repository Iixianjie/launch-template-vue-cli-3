### repo
[github](https://github.com/Iixianjie/launch-template-vue-cli-v3)

<br>
<br>

### 目录说明
```
│  index.js   // 生成vuex实例并导出
│  autoRegisterModules.js   // 收集views目录下的(\w+).module.js文件以及store/modules中的所有(\w).js文件作为vuex的module
,$1将会作为module的命名空间│
├─modules   // 存放所有的module，如果项目比较复杂，可以把module按功能块分到不同的页面文件夹下
│      a.js
│      b.js
│      global.js
│
└─plugins
        saveStateToCache.js
```

<br>
<br>

### 使用
1. 通过mixin的methods在全局注册了$commit和$dispatch两个方法，在调用mutation和action的时候直接通过这两个方法调用即可。
2. 统一使用this.$dispatch({payload, type}, root?)这样的方式提交，方便通过setState方法完成一些简单的mutation提交。
```js
  mutations: {
    setState(state, { type, ...payload }) {
      let keys = Object.keys(payload);
      keys.forEach(key => (state[key] = payload[key]));
    }
  }
```
```
3. 作为插件示例用saveStateToCache.js把state的状态保存到了session中，每次载入页面时如果有缓存的state会取出来作为默认值。