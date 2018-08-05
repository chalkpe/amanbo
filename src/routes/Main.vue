<template lang="html">
  <div class="main">
    <div class="status">
      <a-button
        v-if="!problem"
        type="primary" size="large"
        @click="next">퀴이즈 시작하기</a-button>

      <a-button
        v-if="problem && !chosen"
        size="large" type="dashed">{{ kill }}개 맞음 &middot; {{ death }}개 틀림
      </a-button>

      <a-button
        v-if="problem && chosen"
        size="large" type="dashed"
        @click="next">
        {{ chosen === answer ? '맞았습니다' : '틀렸습니다' }} <a-icon type="right" />
      </a-button>
    </div>

    <div v-if="problem" class="problem">
      <a-divider />
      <h2>다음 중 {{ problem.question(answer) | eunneun }} 무엇인가요?</h2>

      <span
        v-for="card of problem.choices"
        :key="card.id" class="card">

        <a-button v-if="!chosen" @click="choose(card)">
          {{ problem.display(card) }}
        </a-button>

        <card-popover v-else :card="card">
          <a-button :class="btn(card)">
            {{ problem.display(card) }}
          </a-button>
        </card-popover>
      </span>
    </div>
  </div>
</template>

<script>
import factory from '../factory'
import pickOne from '../util/pick-one'
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
      factory: null,

      kill: 0,
      death: 0,

      answer: null,
      chosen: null
    }
  },

  async mounted () {
    this.factory = await factory(count)
  },

  methods: {
    next () {
      this.problem = this.factory()
      this.answer = pickOne(this.problem.choices)
      this.chosen = null
    },

    choose (card) {
      this.chosen = card

      this.kill += +(this.answer === this.chosen)
      this.death += +(this.answer !== this.chosen)
    },

    btn (card) {
      return {
        green: this.answer === this.chosen && this.chosen === card,
        blue: this.answer !== this.chosen && this.answer === card,
        red: this.answer !== this.cosen && this.chosen === card
      }
    }
  }
}
</script>

<style scoped>
  .card + .card {
    margin-left: 0.5rem;
  }

  .kd-summary {
    padding-top: 1rem;
  }

  button.red {
    color: #fff;
    border-color: #ff4d4f;
    background-color: #ff4d4f;
  }

  button.green {
    color: #fff;
    border-color: #23d160;
    background-color: #23d160;
  }

  button.blue {
    color: #fff;
    border-color: #1890ff;
    background-color: #1890ff;
  }
</style>
