<template lang="html">
  <div v-if="review.length">
    <transition-group name="card">
      <card
        v-for="card in review" :key="card.id"
        :card="card" :korean="korean"
        @click.native="removeCard(card)" />
    </transition-group>
  </div>

  <div v-else>
    <h1>놀랍군요!</h1>
    <h3>아직 틀린 문제가 없습니다. 문제 풀어보기 메뉴로 가서 몇 개 틀려 보세요.</h3>
  </div>
</template>

<script>
import storage from '../storage'
import Card from '../components/Card.vue'

export default {
  name: 'ReviewRoute',
  components: { Card },
  mixins: [storage],
  data: () => ({ korean: false, review: [], sync: ['korean', 'review'] }),

  methods: {
    removeCard (card) {
      this.review = this.review.filter(c => c !== card)
    }
  }
}
</script>

<style>
  .card-enter-active, .card-leave-active {
    transition: all 0.5s ease;
  }
  .card-enter, .card-leave-to {
    opacity: 0;
  }
</style>
