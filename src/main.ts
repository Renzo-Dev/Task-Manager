import { createApp } from 'vue'
import App from './App.vue'
import { useMainStore } from './store/useMainStore'
import { router } from '@/router/router.ts'

const app = createApp(App)
app.use(useMainStore)
app.use(router)
app.mount('#app')
