<template>
  <Result
    type="500"
    title="Err: 500"
    desc="服务器暂时过载或维护，请重试!" />
</template>

<script>
  import Result from './Result';

  export default {
    name: 'ServerErorr',
    components: {
      Result
    },
  };
</script>
