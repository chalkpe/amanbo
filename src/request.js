import axios from 'axios'

let data = {}

const ls = url => JSON.parse(localStorage.getItem(url))
const get = url => axios.get(url).then(res => res.data)
const save = (url, v) => localStorage.setItem(url, JSON.stringify(v)) || v

export default async url =>
  (data[url] = data[url] || save(url, ls(url) || await get(url)))
