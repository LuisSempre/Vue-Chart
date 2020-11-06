import { createApp } from 'vue'
import App from './App.vue'
import Vue from "vue"

createApp(App).mount('#app')

Vue.useCssModule(require("vue-chartist"))
require("chatits/dist/chartist.min.css")