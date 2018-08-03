<template lang="html">
  <div id="app">
    {{ name }}
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return { name: 'wow!' }
  }
}
</script>

<style lang="css">
  #app {
    background-color: red;
  }
</style>
