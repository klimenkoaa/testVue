import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/scss/app.scss"
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";

import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = 'https://dummyjson.com/';
axios.defaults.headers.common['accept'] = 'application/json';
axios.defaults.headers.common['content-type'] = 'application/json';

createApp(App)
    .use(VueAxios, axios)
    .use(router)
    .use(store)
    .mount('#app')

import "bootstrap/dist/js/bootstrap.js"
