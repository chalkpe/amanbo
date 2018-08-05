<template lang="html">
  <img class="card-popover" :src="image">
</template>

<script>
import {
  CARD_BACK_URL as back,
  CARD_IMAGE_KOKR_ENDPOINT as koEndpoint,
  CARD_IMAGE_ENUS_ENDPOINT as enEndpoint } from '../config'

export default {
  name: 'Card',

  props: {
    card: {
      type: Object,
      required: true
    },

    hidden: {
      type: Boolean,
      default: false
    },

    korean: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    image () {
      if (this.hidden) return back
      return `${this.korean ? koEndpoint : enEndpoint}/${this.card.id}.png`
    }
  }
}
</script>

<style lang="css" scoped>
  .card-popover {
    width: 222px;
    transition: all 0.5s ease;
    transform: translateY(-20px);
    filter: drop-shadow(5px 5px 5px #ccc);
  }
</style>
