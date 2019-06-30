import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyC5J-MS9UjeXyf9DeFdjCie9OAw-ADVh-U',
  authDomain: 'series-e6391.firebaseapp.com',
  databaseURL: 'https://series-e6391.firebaseio.com',
  projectId: 'series-e6391',
  storageBucket: '',
  messagingSenderId: '736058012165',
  appId: '1:736058012165:web:4f0bacb48a089ea9'
}

firebase.initializeApp(firebaseConfig)

export default firebase
