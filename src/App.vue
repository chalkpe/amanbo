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
      <a class="main__link" :href="pkg.repository">
        <a-icon style="font-size: 2rem" type="github">.</a-icon>
      </a>

      <a class="main__link" :href="'https://twitter.com/intent/tweet?text=' + tweet">
        <a-icon style="font-size: 2rem" type="twitter">.</a-icon>
      </a>

      <div class="main__version">
        Amanbo v{{ pkg.version }}<br>
        Original project: <a href="https://hasuin.github.io">hasuin.github.io</a>
      </div>

      The source code is licensed under the <a :href="license">MIT License</a><br>
      This website is not affiliated with Blizzard Entertainment<br>
      This website contains data that is copyright &copy; Blizzard Entertainment
    </a-layout-footer>
  </a-layout>
</template>

<script>
import pkg from '../package.json'

export default {
  name: 'App',

  computed: {
    pkg: () => pkg,
    license: () => 'https://github.com/ChalkPE/amanbo/blob/master/LICENSE',
    tweet: () => encodeURIComponent('하스스톤 퀴즈 하지 않을래...? https://chalkpe.github.io/amanbo')
  },

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

  .main__link {
    color: #444;
  }

  .main__link + .main__link {
    margin-left: 0.5rem;
  }

  .main__version {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
</style>
