<template lang="html">
  <a-layout id="app">
    <a-layout-header>
      <a-menu
        theme="dark"
        mode="horizontal"
        style="line-height: 64px">
        <a-menu-item>아만보</a-menu-item>
      </a-menu>
    </a-layout-header>

    <a-layout-content style="padding: 25px 25px 0">
      <a-card>
        <router-view />
      </a-card>
    </a-layout-content>

    <a-layout-footer style="text-align: center">
      The source code is licensed under the <a href="https://github.com/ChalkPE/amanbo/blob/master/LICENSE">MIT License</a><br>
      This website is not affiliated with Blizzard Entertainment<br>
      This website contains data that is copyright &copy; Blizzard Entertainment
    </a-layout-footer>
  </a-layout>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="css">
  * {
    font-family: 'Noto Sans Korean', sans-serif;
  }
</style>
