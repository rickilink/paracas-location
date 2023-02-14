import { doc, getDocs, collection } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../firebase.config";
import { setTour } from "../redux/slices/tourSlice";

export const fetchTours = async () => {
  const dispatch = useDispatch();
  try {
    const querySnapshot = await getDocs(collection(db, "Tours"));
    querySnapshot.forEach(
      (doc) => {
        dispatch(setTour(doc.data()));
      }
      // doc.data() is never undefined for query doc snapshots
    );
  } catch (e) {
    console.error(e);
  }

  //
};

function useTours() {
  return useSelector((state) => state.tour.tours);
}
function useTourFilter() {
  return useSelector((state) => state.tour.filter);
}

function useTourFilterByFilteredFeatures() {
  return useSelector((state) => state.tour.FeaturesToFilter);
}

export { useTours, useTourFilter, useTourFilterByFilteredFeatures };
