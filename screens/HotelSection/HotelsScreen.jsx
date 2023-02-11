import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import SectionHeader from "../../components/Modular/SectionHeader";

import SectionHero from "../../components/Modular/SectionHero";
import SectionPopularStays from "../../components/Modular/SectionPopularStays";
import { useHotels, useFilterByFiltered } from "../../hooks/useHotels";

import { filterHotelsByDiscount } from "../../redux/slices/hotelSlice";
import { useSelector } from "react-redux";

// query import { collection, query, where, getDocs } from "firebase/firestore";

export default function HotelsScreen() {
  const hotels = useHotels();
  const filteredHotels = filterHotelsByDiscount(hotels);

  /*   const filter = useFilterByFiltered(); */

  //const q = query(collection(db, "hotels"), where("capital", "==", true))

  return (
    <View className="pt-8 px-6 bg-primary-background flex-1">
      <View>
        <SectionHeader title="Hotels" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <SectionHero filteredByDiscount={filteredHotels} />
          <SectionPopularStays type="hotel" Items={hotels} />
        </ScrollView>
      </View>
    </View>
  );
}
