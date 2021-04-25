import './App.css';
import MenuSite from './components/MenuSite';
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyA8StyFqlii1XnJswBcst1SjGq7TXi4wpI',
  authDomain: 'nasa-dab7a.firebaseapp.com',
  databaseURL: 'https://nasa-dab7a.firebaseio.com',
  projectId: 'nasa-dab7a',
  storageBucket: 'nasa-dab7a.appspot.com',
  messagingSenderId: '735472469534',
  appId: "1:735472469534:web:c7de539f5f05e50c31500f"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function App() {
  return (
    <div className="App">
      <MenuSite></MenuSite>
    </div>
  );
}

export default App;
