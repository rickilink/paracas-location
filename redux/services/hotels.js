import { doc, getDocs, collection } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { db } from "../../firebase.config";
import { setHotel } from "../slices/hotelSlice";

export const fetchHotels = async () => {
  const dispatch = useDispatch();
  try {
    const querySnapshot = await getDocs(collection(db, "Hotels"));
    querySnapshot.forEach(
      (doc) => {
        dispatch(setHotel(doc.data()));
      }
      // doc.data() is never undefined for query doc snapshots
    );
  } catch (e) {
    console.error(e);
  }

  //
};
