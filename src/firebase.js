import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCXAgfS7FNEsyv7wKh7rTgRMMEC1fWSz_4",
    authDomain: "agamemedia-afa09.firebaseapp.com",
    databaseURL: "https://agamemedia-afa09.firebaseio.com",
    projectId: "agamemedia-afa09",
    storageBucket: "agamemedia-afa09.appspot.com",
    messagingSenderId: "305838427170",
    appId: "1:305838427170:web:615021a8e0369cd652ce7b",
    measurementId: "G-RK3JWTXLHK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();

  export default db