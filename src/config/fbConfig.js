import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA65tccoObbNJALbmmTL2MXwyGsTZwqa5A",
    authDomain: "hritik-marioplan.firebaseapp.com",
    databaseURL: "https://hritik-marioplan.firebaseio.com",
    projectId: "hritik-marioplan",
    storageBucket: "hritik-marioplan.appspot.com",
    messagingSenderId: "119702070966",
    appId: "1:119702070966:web:93956af6dcb7990ce1a817"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase