import { doc, getDocs, collection } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../firebase.config";
import { setMarket } from "../redux/slices/marketSlice";

export const fetchMarkets = async () => {
  const dispatch = useDispatch();
  try {
    const querySnapshot = await getDocs(collection(db, "Markets"));
    querySnapshot.forEach(
      (doc) => {
        dispatch(setMarket(doc.data()));
      }
      // doc.data() is never undefined for query doc snapshots
    );
  } catch (e) {
    console.error(e);
  }

  //
};

function useMarkets() {
  return useSelector((state) => state.market.markets);
}
function useMarketFilter() {
  return useSelector((state) => state.market.filter);
}

function useMarketFilterByFilteredFeatures() {
  return useSelector((state) => state.market.FeaturesToFilter);
}

export { useMarkets, useMarketFilter, useMarketFilterByFilteredFeatures };
