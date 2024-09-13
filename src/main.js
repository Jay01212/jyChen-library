// import './assets/main.css'
// import '@/assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
// import DataTable from 'primevue/datatable'
// import Column from 'primevue/Column'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVYqbr-RzaUy1LUQ-1lTvcyp1PKcYSaLY",
  authDomain: "week7-jiayuan-5afaa.firebaseapp.com",
  projectId: "week7-jiayuan-5afaa",
  storageBucket: "week7-jiayuan-5afaa.appspot.com",
  messagingSenderId: "553008008112",
  appId: "1:553008008112:web:734a7210b849e58759e475"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)
// app.component('DataTable', DataTable)
// app.component('Column', Column)

app.mount('#app')
