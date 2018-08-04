import pickOne from './pick-one'

export default function pickSome (array, count, diff) {
  if (!count || !array.length) return []

  const p = pickOne(array)
  const a = array.filter(diff(p))

  console.log(p, a)
  return pickSome(a, count - 1, diff).concat(p)
}
