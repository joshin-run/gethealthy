import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';
import firebase from 'firebase';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  // created() {
  //   firebase.initializeApp(
  //     {
  //       apiKey: "AIzaSyAPkck056r7B-L_TudFrivuNNUk0rQPWbI",
  //       authDomain: "gethealthy-2019.firebaseapp.com",
  //       databaseURL: "https://gethealthy-2019.firebaseio.com",
  //       projectId: "gethealthy-2019",
  //       storageBucket: "gethealthy-2019.appspot.com",
  //       messagingSenderId: "551346752209"
  //     }
  //   )
  // }
}).$mount('#app');
