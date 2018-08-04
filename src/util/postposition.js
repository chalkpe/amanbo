export default pp => str => str +
  pp[+((str.charCodeAt(str.length - 1) - 0xAC00) % 28 === 0)]
