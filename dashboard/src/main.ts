import { createApp } from 'vue'
import App from '@/App.vue'
import router from './router/index'

import 'animate.css'
import '@/assets/css/fonts.css'
import '@/assets/css/tailwind.css'

const app = createApp(App)
app.use(router)
app.mount('#app')

