const rarityName = (str, {rarity}) => str[`GLOBAL_RARITY_${rarity}`]

export default ({ strings }) => ({
  display: card => card.name,
  question: card => `${rarityName(strings, card)} 카드`,
  criteria: card => card.rarity
})
