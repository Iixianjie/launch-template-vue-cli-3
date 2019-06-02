<template>
  <Result
    type="404"
    title="Err: 400"
    desc="您要访问的连接已丢失!" />
</template>

<script>
  import Result from './Result';

  export default {
    name: 'NotFound',
    components: {
      Result
    },
  };
</script>
