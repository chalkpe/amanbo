<template lang="html">
  <div v-if="problem" class="problem">
    <h2>다음 중 {{ problem.question(answer) | eunneun }} 무엇인가요?</h2>

    <card-popover
      v-for="card of problem.choices"
      :key="card.id" :card="card">

      <a-button class="card">{{ problem.criteria(card) }}</a-button>
    </card-popover>

  </div>
</template>

<script>
import factory from '../factory'
import random from '../util/random'
import postposition from '../util/postposition'
import CardPopover from '../components/CardPopover.vue'

const count = 5

export default {
  name: 'MainRoute',
  components: { CardPopover },

  filters: {
    eunneun: postposition('은는')
  },

  data () {
    return {
      problem: null,
      answerIndex: 0,
      factory: null
    }
  },

  computed: {
    answer () {
      return this.problem.choices[this.answerIndex]
    }
  },

  async mounted () {
    this.factory = await factory(count)
    this.next()
  },

  methods: {
    next () {
      this.problem = this.factory().next().value
      this.answerIndex = random(count)
    }
  }
}
</script>

<style scoped>
  .card + .card {
    margin-left: 0.5rem;
  }
</style>
