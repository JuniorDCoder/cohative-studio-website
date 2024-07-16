import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import './index.css'
import './assets/css/progress.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

const app = createApp(App)

// Configure NProgress (optional)
NProgress.configure({ showSpinner: true })

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Cohative Studio'
  next()
})

app.use(router)

app.mount('#app')
