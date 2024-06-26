import '@/assets/css/reset.css'
import '@/assets/css/normalise.css'
import '@/assets/css/googleFonts.css'
import '@/assets/sass/style.sass'

import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router/router.js'

createApp(App).use(router).mount('#app')
