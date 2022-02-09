import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAF_Xh6YZcMV40LNae2Me9w-zrqTgmV5FA",
  authDomain: "linkedin-clone-new-58e07.firebaseapp.com",
  projectId: "linkedin-clone-new-58e07",
  storageBucket: "linkedin-clone-new-58e07.appspot.com",
  messagingSenderId: "9216023628",
  appId: "1:9216023628:web:b3132b6da555ded3bda8e9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };