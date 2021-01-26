import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCuz2syKOUUMQAiYEVJnwwSPnaJWtJqyis",
  authDomain: "linkedin-clone-b8aa8.firebaseapp.com",
  projectId: "linkedin-clone-b8aa8",
  storageBucket: "linkedin-clone-b8aa8.appspot.com",
  messagingSenderId: "1031183553317",
  appId: "1:1031183553317:web:6256fb057c78fa421140cc"
};

const firesbaseApp = firebase.initializeApp(firebaseConfig);
const db = firesbaseApp.firestore();
const auth = firebase.auth();

export { db, auth };