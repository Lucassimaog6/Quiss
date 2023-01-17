import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
	apiKey: "AIzaSyA3n1mgGoWuqO9oKzhnq5wOKaNszfmQi6M",
	authDomain: "quiss-24830.firebaseapp.com",
	projectId: "quiss-24830",
	storageBucket: "quiss-24830.appspot.com",
	messagingSenderId: "565408127462",
	appId: "1:565408127462:web:57ad1b1d666be0501ade27"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {
	db
}

