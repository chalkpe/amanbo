export default {
  created () {
    if (!this.sync) return
    this.sync.forEach(k => {
      this.readLocalStorage(k)
      this.$watch(k, () => this.writeLocalStorage(k))
    })
  },

  methods: {
    readLocalStorage (key) {
      this[key] = JSON.parse(localStorage.getItem(key)) || this[key]
    },

    writeLocalStorage (key) {
      localStorage.setItem(key, JSON.stringify(this[key]))
    }
  }
}
