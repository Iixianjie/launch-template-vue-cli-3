<template>
  <div class="bk-formTitle" v-show="title || desc">
    <div v-show="title" class="bk-formTitle_main">{{title}}</div>
    <div v-show="desc" class="bk-formTitle_desc">{{desc}}</div>
  </div>
</template>

<script>
  export default {
    name: 'FormTitle',
    props: {
      title: String,
      desc: String
    }
  };
</script>