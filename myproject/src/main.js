import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import Reset from 'u-reset.css';
import 'element-ui/lib/theme-chalk/index.css';
import 'u-reset.css/u-reset.css';
Vue.use(ElementUI);
Vue.use(Reset);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
