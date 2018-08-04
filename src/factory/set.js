import pickSome from '../util/pick-some'

const setName = (str, card) => str[`GLOBAL_CARD_SET_${card.set}`]

export default function * ({ cards, strings }, count) {
  while (true) {
    yield {
      criteria: card => card.name,
      question: card => `${setName(strings, card)} 카드`,
      choices: pickSome(cards, count, a => b => a.set !== b.set)
    }
  }
}
