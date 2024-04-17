import { createApp } from 'vue';
import App from './App.vue';
import imageUrlPlugin from './plugins/imageUrlPlugin';
import './index.css';

createApp(App)
  .use(imageUrlPlugin)
  .mount('#app');
