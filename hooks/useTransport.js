import { doc, getDocs, collection } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../firebase.config";
import { setTransport } from "../redux/slices/transportSlice";

export const fetchTransports = async () => {
  const dispatch = useDispatch();
  try {
    const querySnapshot = await getDocs(collection(db, "Transport"));
    querySnapshot.forEach(
      (doc) => {
        dispatch(setTransport(doc.data()));
      }
      // doc.data() is never undefined for query doc snapshots
    );
  } catch (e) {
    console.error(e);
  }

  //
};

function useTransports() {
  return useSelector((state) => state.transport.transports);
}
function useTransportFilter() {
  return useSelector((state) => state.transport.filter);
}

function useTransportFilterByFilteredFeatures() {
  return useSelector((state) => state.transport.FeaturesToFilter);
}

export {
  useTransports,
  useTransportFilter,
  useTransportFilterByFilteredFeatures,
};
