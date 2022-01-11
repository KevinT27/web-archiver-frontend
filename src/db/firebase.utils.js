// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import moment from 'moment'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZQHsnDqpnGzZZBy2oBteBclUTF7yOYBc",
  authDomain: "web-archiver-adfc4.firebaseapp.com",
  projectId: "web-archiver-adfc4",
  storageBucket: "web-archiver-adfc4.appspot.com",
  messagingSenderId: "262586034845",
  appId: "1:262586034845:web:8d3e5d41d7c97f547c8274"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export const fetchNews = async () => {
  const newsList = [];
  const querySnapshot = await getDocs(collection(db, "news"));
  querySnapshot.forEach((doc) => {
    let date_object = new Date(doc.data().date.seconds);
    let formatted_date = moment(date_object).format("LL");
    newsList.push({ id: doc.id, formatted_date, ...doc.data() })
  });
  return newsList;
}

