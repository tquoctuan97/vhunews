// import * as firebase from 'firebase';
import * as firebase from 'firebase';
// Initialize Firebase
let config = {
	apiKey: 'AIzaSyAwcIHHsnG_w5KyEWSa8wt0pgznzus9cCo',
	authDomain: 'portalvhu.firebaseapp.com',
	databaseURL: 'https://portalvhu.firebaseio.com',
	projectId: 'portalvhu',
	storageBucket: 'portalvhu.appspot.com',
	messagingSenderId: '767239089940',
};
export const firebaseApp = firebase.initializeApp(config);
