const hap = card => card.attack + card.health

export default function * (database) {
  while (true) {
    yield {
      display: card => card.name,
      question: card => `공체합이 ${hap(card)}인 카드`,
      criteria: hap
    }
  }
}
