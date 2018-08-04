import pickOne from './pick-one'

const valid = v =>
  v !== undefined && (typeof v !== 'number' || !isNaN(v))

export default function pickSome (array, count, diff) {
  if (!count || !array.length) return []
  const arr = array.filter(i => valid(diff(i)))

  const p = pickOne(arr)
  const a = arr.filter(i => diff(i) !== diff(p))

  return pickSome(a, count - 1, diff).concat(p)
}
