export default function * ({ cards, strings }) {
  const setName = card => strings[`GLOBAL_CARD_SET_${card.set}`]

  while (true) {
    yield {
      display: card => card.name,
      question: card => `${setName(card)} 카드`,
      criteria: card => card.set
    }
  }
}
