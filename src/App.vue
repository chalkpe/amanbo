<template lang="html">
  <a-layout class="main">
    <a-layout-header>
      <a-menu
        mode="horizontal"
        theme="dark" class="main__menu"
        :default-selected-keys="[$route.name]"
        @select="handleMenu">

        <a-menu-item key="MainRoute">문제 풀어보기</a-menu-item>
        <a-menu-item key="ReviewRoute">틀린 카드 복습하기</a-menu-item>
      </a-menu>
    </a-layout-header>

    <a-layout-content class="main__content">
      <a-card>
        <router-view />
      </a-card>
    </a-layout-content>

    <a-layout-footer class="main__footer">
      The source code is licensed under the <a href="https://github.com/ChalkPE/amanbo/blob/master/LICENSE">MIT License</a><br>
      This website is not affiliated with Blizzard Entertainment<br>
      This website contains data that is copyright &copy; Blizzard Entertainment
    </a-layout-footer>
  </a-layout>
</template>

<script>
export default {
  name: 'App',

  methods: {
    handleMenu ({ key }) {
      this.$router.push({ name: key })
    }
  }
}
</script>

<style lang="css">
  * {
    font-family: 'Noto Sans Korean', sans-serif;
  }

  .main {
    height: 100%;
  }

  .main__menu {
    line-height: 64px;
  }

  .main__content {
    padding: 25px 25px 0;
    text-align: center;
  }

  .main__footer {
    text-align: center;
  }
</style>
