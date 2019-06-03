<template>
  <div class="test">

    <div class="mtb-24">
      <div>
        布局:
        <button class="btn __sm" @click="layout = !layout">{{layout ? 'row' : 'col'}}</button>
      </div>
    </div>

    <Form :layout="layout ? 'col' : 'row'">
      <FormTitle title="基本信息" desc="输入您的基本信息，用于xxxx"></FormTitle>
      <formItem label="姓名"></formItem>
      <formItem label="出生日期" hasArrow :status="status" tipMsg="输入有误！"></formItem>
      <formItem label="所在城市"></formItem>
      <FormFoot textAlign="right">
        <button class="btn __info __block __lg">submit</button>
        <button class="btn __denger __block __lg">reset</button>
      </FormFoot>
    </Form>
  </div>
</template>

<script>
  export default {
    name: 'Test',
    data() {
      return {
        show: true,
        layout: true,
        status: 'error'
      }
    }
  };
</script>
