export default ({ strings }) => ({
  display: card => card.name,
  question: card => `플레이버 텍스트가 [${card.flavor}]인 카드`,
  criteria: card => card.flavor
})
