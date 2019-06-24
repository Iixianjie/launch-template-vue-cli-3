<template>
  <div class="test">

    <div class="mtb-24">
      <div>
        布局:
        <Spin :show="true"></Spin>
        <button class="btn __sm" @click="layout = !layout">{{layout ? 'row' : 'col'}}</button>
      </div>
    </div>

    <Form
      @submit="submit"
      :models="fields"
      :rules="rules"
      :layout="layout ? 'col' : 'row'">
      <FormTitle title="基本信息" desc="输入您的基本信息，用于xxxx"></FormTitle>
      <formItem label="姓名" hasFeedback hasArrow name="name">
        <input type="text" v-model="fields.name">
      </formItem>
      <formItem label="简介" hasFeedback hasArrow name="desc">
        <input type="text" v-model="fields.desc">
      </formItem>
      <formItem label="出生日期" tipMsg="输入有误！" name="time">
        <input type="datetime-local" v-model="fields.time">
      </formItem>
      <formItem label="爱好" tipMsg="输入有误！" name="like">
        吃饭
        <input type="checkbox" value="吃饭" v-model="fields.like">

        睡觉
        <input type="checkbox" value="睡觉" v-model="fields.like">

        打豆豆
        <input type="checkbox" value="打豆豆" v-model="fields.like">
      </formItem>
      <FormFoot textAlign="right">
        <button class="btn __info __block __lg">submit</button>
        <button class="btn __denger __block __lg">reset</button>
      </FormFoot>
    </Form>
  </div>
</template>

<script>
  import Spin from '@/components/Spin/Spin';

  export default {
    components: {
      Spin
    },
    name: 'Test',
    data() {
      return {
        show: true,
        layout: true,
        status: 'error',
        fields: {
          name: '',
          desc: '',
          time: '',
          like: []
        },
        rules: {
          name: {
            presence: true,
            length: {
              minimum: 2,
              maximum: 5
            }
          },
          desc: {
            length: {
              minimum: 5,
              maximum: 100
            }
          },
          time: {
            datetime: {
              latest: '2019-06-04'
            }
          },
          like: {
            presence: true,
            length: {
              is: 2
            }
          }
        }
      }
    },
    methods: {
      submit({ isPass }) {
        console.log(isPass ? '验证通过' : '验证未通过');
      }
    }
  };
</script>
