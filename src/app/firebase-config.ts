import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDoNEt2vkSrDENPipqaSF_Kda0yPzJSY78',
  authDomain: 'quero-docura.firebaseapp.com',
  databaseURL: 'https://quero-docura.firebaseio.com',
  projectId: 'quero-docura',
  storageBucket: 'quero-docura.appspot.com',
  messagingSenderId: '971356831383',
  appId: '1:971356831383:web:c34c0326f9f9e5ea36b3d2',
  measurementId: 'G-T75NK6T715',
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.firestore();
// export const firebaseStorage = firebase.storage();
// export const firebaseFunctions = firebase.functions();
// export const firebaseAuth = firebase.auth();
