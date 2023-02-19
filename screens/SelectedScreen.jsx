import React, { useRef, useState } from "react";
import {
  View,
  ScrollView,
  Touchable,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import SectionSelectedHeader from "../components/Modular/SectionSelectedHeader";
import SectionSelectedImages from "../components/Modular/SectionSelectedImages";
import SectionSelectedFeatures from "../components/Modular/SectionSelectedFeatures";
import SectionSelectedAbout from "../components/Modular/SectionSelectedAbout";
import HotelBookModal from "../components/Hotels/HotelBookModal";
import SectionSelectedOpeningHours from "../components/Modular/SectionSelectedOpeningHours";
import SectionSelectedReviews from "../components/Modular/SectionSelectedReviews";
import { useAnimatedScrollHandler } from "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import IconEntypo from "react-native-vector-icons/Entypo"; //heart  heart-outlined
import useTheme from "../hooks/useTheme";
import { db } from "../firebase.config";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { deleteFavorite, updateFavorite } from "../redux/slices/authSlice";
import { DateStamp } from "../components/dateStamp";

export default function SelectedScreen() {
  const currentUser = useSelector((state) => state.auth.currentUser);

  const {
    params: { ItemDetails },
  } = useRoute();

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { primaryContrast } = useTheme();
  const scrollViewRef = useRef(null);

  useState(() => {
    const exists = currentUser?.visited.find(
      (visitedCity) => visitedCity.name === ItemDetails.name
    );

    if (exists) {
      console.log("The city has been visited");
    } else {
      const collectionRef = doc(db, "Users", currentUser.uid);
      updateDoc(
        collectionRef,
        {
          visited: arrayUnion(ItemDetails),
        },
        { merge: true }
      )
        .then(() => {
          console.log("added to resent visited successfully!");
        })
        .catch((error) => {
          console.error("Error updating resent visited document:", error);
        });
    }
    /*  */
  }, []);

  const handleAddFavorite = () => {
    const collectionRef = doc(db, "Users", currentUser.uid);
    updateDoc(collectionRef, {
      favorite: arrayUnion(ItemDetails),
    })
      .then(() => {
        console.log("Document added successfully!");
        dispatch(updateFavorite(ItemDetails));
        console.log("Document added to local storage!");
      })
      .catch((error) => {
        console.error("Error added favorites document:", error);
      });
  };

  const handleDeleteFavorite = () => {
    const collectionRef = doc(db, "Users", currentUser.uid);
    updateDoc(collectionRef, {
      favorite: arrayRemove(ItemDetails),
    })
      .then(() => {
        console.log("Document deleted successfully!");
        dispatch(deleteFavorite(ItemDetails));
        console.log("Document deleted from local storage!");
      })
      .catch((error) => {
        console.error("Error deleted favorites document:", error);
      });
  };

  const handleFavorite = async () => {
    currentUser.favorite?.some((el) => el.name === ItemDetails.name)
      ? handleDeleteFavorite()
      : handleAddFavorite();
  };

  const handleScroll = useAnimatedScrollHandler((event) => {
    // desactivar el desplazamiento vertical en el componente principal
    scrollViewRef.current?.scrollTo({ x: 0, animated: false });
  });
  return (
    <GestureHandlerRootView className="relative pt-8 flex-1 bg-primary-background">
      <ScrollView showsVerticalScrollIndicator={false} ref={scrollViewRef}>
        <View className=" pb-10  ">
          {/* Hearth */}

          <TouchableOpacity
            onPress={() => handleFavorite()}
            className="absolute right-5 top-5 w-10 h-10 items-center justify-center z-20"
          >
            {currentUser.favorite?.some(
              (el) => el.name === ItemDetails.name
            ) ? (
              <IconEntypo name="heart" size={30} color={primaryContrast} />
            ) : (
              <IconEntypo
                name="heart-outlined"
                size={30}
                color={primaryContrast}
              />
            )}
          </TouchableOpacity>
          <View className=" px-6">
            <SectionSelectedHeader
              name={ItemDetails.name || "name"}
              rating={ItemDetails.rating}
              type={ItemDetails.type || "type"}
            />
          </View>
          <View className="px-1 ">
            <SectionSelectedImages
              handleScroll={handleScroll}
              image={ItemDetails.image || "image"}
              location={ItemDetails.location || "location"}
              gallery={ItemDetails.gallery || "gallery"}
            />
          </View>
          <View className=" px-6 pt-3">
            {ItemDetails.features && (
              <SectionSelectedFeatures
                features={ItemDetails.features || "features"}
              />
            )}
            <SectionSelectedOpeningHours />
            {ItemDetails.description && (
              <SectionSelectedAbout
                description={ItemDetails.description || "features"}
              />
            )}
            {ItemDetails.reviews && (
              <SectionSelectedReviews
                reviews={ItemDetails.reviews || "reviews"}
              />
            )}
          </View>
        </View>
      </ScrollView>

      <HotelBookModal price={ItemDetails.price} />
    </GestureHandlerRootView>
  );
}
