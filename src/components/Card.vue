<template lang="html">
  <img :src="image" class="card-popover">
</template>

<script>
import {
  CARD_BACK_URL as back,
  CARD_IMAGE_ENDPOINT as endpoint } from '../config'

export default {
  name: 'CardPopover',

  props: {
    card: {
      type: Object,
      required: true
    },

    hidden: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    image () {
      return this.hidden ? back : `${endpoint}/${this.card.id}.png`
    }
  }
}
</script>

<style lang="css" scoped>
  .card-popover {
    width: 12vw;
    filter: drop-shadow(5px 5px 5px #ccc);
  }
</style>
