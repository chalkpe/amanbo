export default {
  created () {
    if (this.sync) this.sync.forEach(s => this.syncLocalStorage(s))
  },

  methods: {
    syncLocalStorage (key) {
      this[key] = JSON.parse(localStorage.getItem(key)) || this[key]
      this.$watch(key, () => this.writeLocalStorage(key), { immediate: true })
    },

    writeLocalStorage (key) {
      localStorage.setItem(key, JSON.stringify(this[key]))
    }
  }
}
