  
import database, { firebase } from '@react-native-firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDrUKszBX5FR-SAICbKnk9Cy2M9yMhY7-4",
    authDomain: "query-api-65347.firebaseapp.com",
    databaseURL: "https://query-api-65347-default-rtdb.firebaseio.com",
    projectId: "query-api-65347",
    storageBucket: "query-api-65347.appspot.com",
    messagingSenderId: "949029987315",
    appId: "1:949029987315:web:a79098af32c47a36bd6886"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase, database };