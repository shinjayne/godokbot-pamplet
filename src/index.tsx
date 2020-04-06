import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Root from "./Root";
import firebase from 'firebase';

import {createContainer} from "unstated-next";

var firebaseConfig = {
  apiKey: 'AIzaSyCRMour7cmdVS-sG9i1EVKC1RwvJUhp0EY',
  storageBucket: 'gs://godokbot.appspot.com',
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

function useFirebase() {
  return {firebase};
}

export const FirebaseContainer = createContainer(useFirebase);

ReactDOM.render(
  <FirebaseContainer.Provider>
    <Root/>
  </FirebaseContainer.Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
