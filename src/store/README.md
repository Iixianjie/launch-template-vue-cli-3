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
