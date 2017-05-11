import firebaseApp from 'firebase/app'
import firebaseDatabase from 'firebase/database'

var config = {
  apiKey: 'AIzaSyBJNpcfZ49j78fyGqfO0KJpZY7mREb7pQU',
  authDomain: 'jolichat-e996f.firebaseapp.com',
  databaseURL: 'https://jolichat-e996f.firebaseio.com',
}

const firebaseInstance = firebaseApp.initializeApp(config);
export default firebaseInstance
