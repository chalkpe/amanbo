export default (database) => ({
  display: card => card.name,
  question: card => `비용이 (${card.cost})인 카드`,
  criteria: card => card.cost
})
