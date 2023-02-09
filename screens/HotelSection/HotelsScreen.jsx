import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import HotelsHeader from "../../components/Hotels/HotelsHeader";
import HotelSectionsHero from "../../components/Hotels/HotelSectionsHero";
import HotelPopularStays from "../../components/Hotels/HotelPopularStays";

// firebase firestore

import { db } from "../../firebase.config.js";
import { doc, getDocs, collection } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { setHotel } from "../../redux/slices/hotelSlice";

// query import { collection, query, where, getDocs } from "firebase/firestore";

export default function HotelsScreen() {
  const dispatch = useDispatch();

  //const q = query(collection(db, "hotels"), where("capital", "==", true))

  useState(() => {
    const fetchDate = async () => {
      const querySnapshot = await getDocs(collection(db, "Hotels"));
      querySnapshot.forEach((doc) => {
        dispatch(setHotel(doc.data()));
        // doc.data() is never undefined for query doc snapshots
      });
      //
    };
    fetchDate();
  }, []);

  return (
    <View className="pt-8 px-6 bg-primary-background flex-1">
      <View>
        <HotelsHeader />
        <ScrollView>
          <HotelSectionsHero />
          <HotelPopularStays />
        </ScrollView>
      </View>
    </View>
  );
}
