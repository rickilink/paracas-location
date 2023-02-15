import { doc, getDocs, collection } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../firebase.config";
import { setExchange } from "../redux/slices/exchangeSlice";

export const fetchExchanges = async () => {
  const dispatch = useDispatch();
  try {
    const querySnapshot = await getDocs(collection(db, "Exchanges"));
    querySnapshot.forEach(
      (doc) => {
        dispatch(setExchange(doc.data()));
      }
      // doc.data() is never undefined for query doc snapshots
    );
  } catch (e) {
    console.error(e);
  }

  //
};

function useExchanges() {
  return useSelector((state) => state.exchange.exchanges);
}
function useExchangeFilter() {
  return useSelector((state) => state.exchange.filter);
}

function useExchangeFilterByFilteredFeatures() {
  return useSelector((state) => state.exchange.FeaturesToFilter);
}

export { useExchanges, useExchangeFilter, useExchangeFilterByFilteredFeatures };
