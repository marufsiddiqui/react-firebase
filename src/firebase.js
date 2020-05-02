import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAiiTQ38GGyc2K4S5JgHU5XIywykdm_BOg",
  authDomain: "chat-app-d4073.firebaseapp.com",
  databaseURL: "https://chat-app-d4073.firebaseio.com",
  projectId: "chat-app-d4073",
  storageBucket: "chat-app-d4073.appspot.com",
  messagingSenderId: "1060870481215",
  appId: "1:1060870481215:web:2fe838ae0c27c8b6259f8a"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()

export { db }
