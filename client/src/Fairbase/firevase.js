
import firebase from "firebase/app"
import "firebase/auth"
const app = firebase.initializeApp({
  apiKey: "AIzaSyA8StyFqlii1XnJswBcst1SjGq7TXi4wpI",
  authDomain: "nasa-dab7a.firebaseapp.com",
  databaseURL: "https://nasa-dab7a.firebaseio.com",
  projectId: "nasa-dab7a",
  storageBucket: "nasa-dab7a.appspot.com",
  messagingSenderId: "735472469534",
  appId: "1:735472469534:web:c7de539f5f05e50c31500f",
})

export const auth = app.auth()
export default app