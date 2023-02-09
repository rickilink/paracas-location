import { collection, query, where, getDocs } from "firebase/firestore";

/* puede usar where() para consultar todos los documentos que cumplen una determinada condición y luego usar get() para recuperar los resultados: */

const q = query(collection(db, "Hotels"), where("capital", "==", true));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});
