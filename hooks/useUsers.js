import { doc, getDocs, collection } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../firebase.config";
import { setUsers } from "../redux/slices/userSlice";

export const fetchUsers = async () => {
  const dispatch = useDispatch();
  try {
    const querySnapshot = await getDocs(collection(db, "Users"));
    querySnapshot.forEach(
      (doc) => {
        dispatch(setUsers(doc.data()));
      }
      // doc.data() is never undefined for query doc snapshots
    );
  } catch (e) {
    console.error(e);
  }

  //
};

function useCurrentUser() {
  return useSelector((state) => state.auth.currentUser);
}
function useUsersFilter() {
  return useSelector((state) => state.user.filter);
}

export { useCurrentUser, useUsersFilter };
