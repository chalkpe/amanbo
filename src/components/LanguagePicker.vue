<template lang="html">
  <span>
    <b>카드 언어:</b>
    <a-switch
      v-model="korean" class="language-switch"
      checked-children="한국어" un-checked-children="English" />

    <div style="margin-top: 0.25rem"><i>(경고: 한국어가 폭발할 수 있음.)</i></div>
  </span>
</template>

<script>
import storage from '../storage'

export default {
  name: 'LanguagePicker',
  mixins: [storage],
  data: () => ({ korean: false, sync: ['korean'] })
}
</script>

<style lang="css">
  .language-switch {
    margin-left: 0.5rem;
    margin-bottom: 0.2rem;
  }
</style>
