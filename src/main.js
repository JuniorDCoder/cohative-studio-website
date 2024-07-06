import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

const app = createApp(App)

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Cohative Studio'
  next()
})

app.use(router)

app.mount('#app')
