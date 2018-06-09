import Vue from 'vue';
import App from 'src/App.vue';
import router from 'src/routing/router';
import store from 'src/store/store';
import 'src/assets/style.scss';

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
});
