import { collection, getDocs } from "firebase/firestore";

// get All the documents in the collection
const querySnapshot = await getDocs(collection(db, "Hotels"));
querySnapshot.forEach((doc) => {});
