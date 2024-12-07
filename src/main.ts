import { createApp } from 'vue'
import App from './App.vue'
import { store } from '@/store/mainStore.ts'
import router from '@/router/router.ts'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
