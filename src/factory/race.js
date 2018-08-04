
export default function * ({ strings }) {
  const raceName = ({race}) =>
    strings[`GLOBAL_RACE_${race.replace('BEAST', 'PET')}`]

  while (true) {
    yield {
      display: card => card.name,
      question: card => `${raceName(card)}인 카드`,
      criteria: card => card.race
    }
  }
}
