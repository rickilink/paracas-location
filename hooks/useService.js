import { doc, getDocs, collection } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../firebase.config";
import { setService } from "../redux/slices/serviceSlice";

export const fetchServices = async () => {
  const dispatch = useDispatch();
  try {
    const querySnapshot = await getDocs(collection(db, "Services"));
    querySnapshot.forEach(
      (doc) => {
        dispatch(setService(doc.data()));
      }
      // doc.data() is never undefined for query doc snapshots
    );
  } catch (e) {
    console.error(e);
  }

  //
};

function useServices() {
  return useSelector((state) => state.service.services);
}
function useServiceFilter() {
  return useSelector((state) => state.service.filter);
}

function useServiceFilterByFilteredFeatures() {
  return useSelector((state) => state.service.FeaturesToFilter);
}

export { useServices, useServiceFilter, useServiceFilterByFilteredFeatures };
