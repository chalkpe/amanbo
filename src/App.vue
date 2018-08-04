<template lang="html">
  <a-layout class="main">
    <a-layout-header>
      <a-menu
        theme="dark"
        mode="horizontal"
        class="main__menu">

        <a-menu-item>문제 풀어보기</a-menu-item>
        <a-menu-item>틀린 문제 복습하기</a-menu-item>
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
  name: 'App'
}
</script>

<style lang="css">
  * {
    font-family: 'Noto Sans Korean', sans-serif;
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
