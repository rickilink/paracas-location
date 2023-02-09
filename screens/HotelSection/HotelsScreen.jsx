import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import HotelsHeader from "../../components/Hotels/HotelsHeader";
import HotelSectionsHero from "../../components/Hotels/HotelSectionsHero";
import HotelPopularStays from "../../components/Hotels/HotelPopularStays";

// query import { collection, query, where, getDocs } from "firebase/firestore";

export default function HotelsScreen() {
  //const q = query(collection(db, "hotels"), where("capital", "==", true))

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
