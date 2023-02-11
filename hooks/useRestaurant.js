import { doc, getDocs, collection } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../firebase.config";
import { setRestaurant } from "../redux/slices/restaurantSlice";

export const fetchRestaurants = async () => {
  const dispatch = useDispatch();
  try {
    const querySnapshot = await getDocs(collection(db, "Restaurants"));
    querySnapshot.forEach(
      (doc) => {
        dispatch(setRestaurant(doc.data()));
      }
      // doc.data() is never undefined for query doc snapshots
    );
  } catch (e) {
    console.error(e);
  }

  //
};

function useRestaurants() {
  return useSelector((state) => state.restaurant.restaurants);
}
function useRestaurantFilter() {
  return useSelector((state) => state.restaurant.filter);
}

function useRestaurantFilterByFilteredFeatures() {
  return useSelector((state) => state.restaurant.FeaturesToFilter);
}

export {
  useRestaurants,
  useRestaurantFilter,
  useRestaurantFilterByFilteredFeatures,
};
