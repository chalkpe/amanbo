import pickSome from '../util/pick-some'

export default function * (database, count) {
  const list = database.cards.filter(c => c.cost !== undefined)

  while (true) {
    yield {
      criteria: card => card.name,
      question: card => `비용이 (${card.cost})인 카드`,
      choices: pickSome(list, count, a => b => a.cost !== b.cost)
    }
  }
}
