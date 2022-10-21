import { createApp } from 'vue';
import Slimkit from 'slimkit';
import './assets/scss/main.scss';
import App from './App.vue';

// Create app
const app = createApp(App);

// Add slimkit
app.use(Slimkit);

// Mount app
app.mount('#app');
