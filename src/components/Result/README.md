## 基础组件
### Reasult
页面级的反馈组件
```jsx harmony
/* Result
 * type: <srt>  图标类型, 可以是'success', 'warning', 'error', 'waiting', '404', '500'
 * title: <str = '操作成功!'> 标题
 * desc: 描述
 * btn: <str[] = ['返回']>  按钮文本
 * disableBack: <bool = false>  是否禁用默认的返回事件
 * onBtnClick: <fn(btnNo)>  按钮被点击时触发，btnNo为被点击按钮的索引, 默认第一个按钮点击会返回上一页
 */
  
<Result
  type="warning"
  title="操作成功!"
  desc="操作成功描述操作成功描述操作成功描述操作成功描述操作成功描述操作成功描述"
  btn={['返回首页', '取消订单']}
  disableBack
  onBtnClick={(type) => console.log(type)} />
```

### FeedBack
嵌入式的反馈组件
```js
<Feedback 
  icon={1} // 有效值1、2, 默认值1
  msg={<div>文本 <i>斜体</i></div>}  // 提示信息，也可以传入vDom, 默认值为“暂无数据”
  btnText="点击"  // 传入后显示按钮
  onbtnClick={() => console.log('点击')}  // 按钮点击事件
  />
```

## 衍生组件
在路由中注册后使用
### NotFound
404页面

### ServerErorr
500页面

### ResultPage
接收同名的query作为Result的组件，仅支持type、title、desc三个参数。