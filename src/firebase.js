import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDrbVCKfabiWEUDvnSDUj_GErdqNFiXIYA",
    authDomain: "home-automation-dda23.firebaseapp.com",
    databaseURL: "https://home-automation-dda23.firebaseio.com",
    projectId: "home-automation-dda23",
    storageBucket: "home-automation-dda23.appspot.com",
    messagingSenderId: "280427148116",
    appId: "1:280427148116:web:347e37d095f90d2ad80ec1",
    measurementId: "G-TF008J1F59"
  };

  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();