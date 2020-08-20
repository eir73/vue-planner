import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyDDeNzW9U6MJ9UfHH-Ku3TDEEyZlppxgJg",
  authDomain: "vuejs-planner.firebaseapp.com",
  databaseURL: "https://vuejs-planner.firebaseio.com",
  projectId: "vuejs-planner",
  storageBucket: "vuejs-planner.appspot.com",
  messagingSenderId: "253595846832",
  appId: "1:253595846832:web:1b694978a3a42fac4b9375",
  measurementId: "G-K1JBW829H9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
