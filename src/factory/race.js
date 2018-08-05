const raceName = (str, {race}) =>
  str[`GLOBAL_RACE_${race.replace('BEAST', 'PET')}`]

export default ({ strings }) => ({
  display: card => card.name,
  question: card => `${raceName(strings, card)}인 카드`,
  criteria: card => card.race
})
