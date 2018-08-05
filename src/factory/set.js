const setName = (str, card) => str[`GLOBAL_CARD_SET_${card.set}`]

export default ({ strings }) => ({
  display: card => card.name,
  question: card => `${setName(strings, card)} 카드`,
  criteria: card => card.set
})
