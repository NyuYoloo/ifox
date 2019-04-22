import Firebase from 'firebase';  
let config = {  
  apiKey: "AIzaSyAcOuoACoGN5TTTRx0W4k9gC__K0t_Cczs",
  authDomain: "ifox-5cf9f.firebaseapp.com",
  databaseURL: "https://ifox-5cf9f.firebaseio.com",
  projectId: "ifox-5cf9f",
  storageBucket: "ifox-5cf9f.appspot.com",
  messagingSenderId: '828917815312'
};
let app = Firebase.initializeApp(config);  
export const db = app.database();  