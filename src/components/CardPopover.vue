<template lang="html">
  <a-popover placement="bottom" :auto-adjust-overflow="false">
    <slot />
    <img
      slot="content"
      :src="image" class="card-popover">
  </a-popover>
</template>

<script>
import { CARD_IMAGE_ENDPOINT as endpoint } from '../config'

export default {
  name: 'CardPopover',
  props: {
    card: {
      type: Object,
      required: true
    }
  },

  computed: {
    image () {
      return `${endpoint}/${this.card.id}.png`
    }
  }
}
</script>

<style lang="css">
  .card-popover {
    filter: drop-shadow(5px 5px 5px #ccc);
  }

  .ant-popover-inner {
    box-shadow: none;
    background: none !important;
  }

  .ant-popover-title, .ant-popover-arrow {
    display: none;
  }

  .ant-popover-inner-content {
    padding: 0;
  }

</style>
