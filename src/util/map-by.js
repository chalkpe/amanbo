function append (m, k, v) {
  if (k !== undefined) {
    if (!m.has(k)) m.set(k, [])
    m.get(k).push(v)
  }
  return m
}

export default (arr, key) =>
  arr.reduce((m, o) => append(m, key(o), o), new Map())
