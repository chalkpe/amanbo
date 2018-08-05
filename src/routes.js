import Main from './routes/Main.vue'
import Review from './routes/Review.vue'

export default [
  { path: '/', component: Main, name: Main.name },
  { path: '/review', component: Review, name: Review.name }
]
