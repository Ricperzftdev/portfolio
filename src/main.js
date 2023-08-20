import "./assets/css/fonts.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { i18n } from "./plugins/i18n"

const app = createApp(App)

const components = import.meta.globEager('./components/*.vue');

Object.entries(components).forEach(([path, component]) => {
    app.component(
        path
            .split('/')
            .pop()
            .replace(/\.\w+$/, ''),
        component.default
    );
});

app.use(router)

app.use(i18n)

app.mount('#app')
