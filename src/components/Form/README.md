# 组件

## Form
表单功能的核心组件，所有的验证功能都在该组件内部进行。相对的，formItem等组件则是接收错误状态和表单控件并进行展示的纯组件

### Props
`layout: <str(row | *col)>`   表单的布局方式，分别是横向、纵向

`models: <obj={}>`    需要验证的所有model值

`rules: <obj={}>`   表单验证规则

### Event
```
submit: <fn({
  isPass  是否验证通过
  errors  未通过时，传入错误信息
  data    传入的model, 没有经过任何处理， 完全等价于传入Form组件的model
})>
```

## FromItem
展示验证结果，同时也是表单控件的容器

### props
`status: <str(success | warn | info | error | *'')>`
// 显示指定状态, 为空字符串是为不显示, 该属性在传入时会被转为内部属性, 只作为初始值使用, 因为它随时可能会被From组件从内部改变，但是也可以在需要时改变传递其所传递的值

`tipMsg: <str>`     当状态不为空时显示的提示文字

`hasFeedback： <bool=true>`    是否显示验证状态

`hasArrow: <bool=false>`    是否显示右箭头

`label: <str>`    该表单项的标题

`name: *<str>`    当需要进行验证时，这个属性用来帮助Form组件进行关联，与传递给From的model内部关联字段对应

## FormTitle
在表单过于复杂时，用于对指定的一系列表单进行分组描述和说明
`title: <str>`  标题

`desc: <str>`  描述

## textAlign
表单的底部，用来存放提交按钮或说明文本
`textAlign: <str(left | *center | right)>`  内容的反向，只对内部的inline级元素生效
