import { collection, getDocs } from "firebase/firestore";

// get All the documents in the collection
const querySnapshot = await getDocs(collection(db, "Hotels"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});
