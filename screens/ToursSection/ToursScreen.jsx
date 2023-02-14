import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import SectionHeader from "../../components/Modular/SectionHeader";

import SectionHero from "../../components/Modular/SectionHero";
import SectionPopularStays from "../../components/Modular/SectionPopularStays";

import { useTours } from "../../hooks/useTours";
import { filterToursByDiscount } from "../../redux/slices/tourSlice";

// query import { collection, query, where, getDocs } from "firebase/firestore";

export default function ToursScreen() {
  const tours = useTours(); //TODO: change Name
  const filteredTours = filterToursByDiscount(tours); //TODO: change Name

  return (
    <View className="pt-8 px-6 bg-primary-background flex-1">
      <View>
        <SectionHeader title="tours" Items={tours} />
        {/*TODO: Change Name */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <SectionHero filteredByDiscount={filteredTours} />
          <SectionPopularStays type="tour" Items={tours} />
        </ScrollView>
      </View>
    </View>
  );
}
