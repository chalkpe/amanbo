const hap = card => card.attack + card.health

export default () => ({
  display: card => card.name,
  question: card => `공체합이 ${hap(card)}인 카드`,
  criteria: hap
})
