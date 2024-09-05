//import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import Aura from '@primevue/themes/aura';
import PrimeVue from 'primevue/config'
import Card from "primevue/card";
import Button from "primevue/button";

const app = createApp(App);
app.use(PrimeVue, {
    ripple: true, // enable ripple effect
    theme: {
        preset: Aura,
        options:{
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }
});
app.component('pv-card', Card);
app.component('pv-button', Button);

app.mount('#app');