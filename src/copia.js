import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Importa la funcion onAuthStateChanged
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_vag3Qr7ZGYmmGcyp2QpoYbuDV3xTk4Q",
  authDomain: "fir-vue-4e116.firebaseapp.com",
  projectId: "fir-vue-4e116",
  storageBucket: "fir-vue-4e116.appspot.com",
  messagingSenderId: "176252235283",
  appId: "1:176252235283:web:5b5ab802fdbe6a9b3919e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Función 
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user)
      const usuarioActivo ={
        email: user.email,
        uid: user.uid
      }
     store.dispatch('detectarUsuario', usuarioActivo)
     console.log(usuarioActivo)
    // ...
  } else {
    console.log(user)
    store.dispatch('detectarUsuario', user)
    // User is signed out
    // ...
  } 
});

createApp(App).use(store).use(router).mount('#app')
