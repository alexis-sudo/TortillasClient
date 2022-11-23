import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//inicializamos la app con las credenciales que copiamos de firebase.
const firebaseApp = initializeApp({
    apiKey: "AIzaSyAlCfW2LLPMSKS3k3azQhw0be6DodB83-M",
    authDomain: "tortillas-complete.firebaseapp.com",
    projectId: "tortillas-complete",
    storageBucket: "tortillas-complete.appspot.com",
    messagingSenderId: "100818499736",
    appId: "1:100818499736:web:e25f38a0c43df4bff478ed",
    measurementId: "G-0WPGLEFL1L",
});
//asignamos la funcion a firestore
const db = getFirestore();
//hacemos que este archivo exporte firestore por defecto para usarlo en otro archivo
export default db;