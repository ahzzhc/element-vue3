import { createApp } from 'vue'
import './assets/css/style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import global from './components/global'
import testPlugin from './test.plugin'
import { directives } from './utils/common'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
import './styles/index.css'

const app = createApp(App)
directives(app)
app.use(store)
app.use(router)
app.use(global)
app.use(testPlugin)
app.mount('#app')
