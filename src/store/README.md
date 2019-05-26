# 关于本store的基本使用
[github](https://github.com/qq1073830130)

----

> vuex作为flux模式的衍生物，额外提供了很多使用方便的api，与redux等的使用最大的区别就是state具有vue的响应性，自带异步处理，并且不用显式的强调数据的不可变性，只需要通过mutation简单的对state进行赋值即可，在熟悉redux的情况下，使用还是非常简单的。

注: 由于经常会使用dva + umi作为脚手架，所以这个目录与其保持了很大程度上的一致以在一定程度上减少在两者间切换时的理解成本）。

### 目录说明
```
│  index.js   // 生成vuex实例并导出
│  moduleEntry.js   // 在创建新mudule的时候，一定要在这里显式声明。
│
├─modules   // 存放所有的module，如果项目比较复杂，可以以page作为目录名进行细化。
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
3. 不要使用官方的一系列map方法来单个的获取state或getter，直接用一个计算属性声明即可。
```js
  computed: {
    $getters() {
      return this.$store.getters;
    },
    $stateA() {
      return this.$store.state.a;
    }
  }
```
4. 作为插件示例用saveStateToCache.js把state的状态保存到了session中，每次载入页面时如果有缓存的state会取出来作为默认值。
5. 既然用了flux架构，就尽量不要在组件里写state了。
