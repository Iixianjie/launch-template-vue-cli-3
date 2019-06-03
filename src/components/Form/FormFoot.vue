<template>
  <div class="bk-formFoot" :style="{ textAlign }">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'FormFoot',
    props: {
      textAlign: {
        type: String,
        default: 'center'
      },
    }
  };
</script>