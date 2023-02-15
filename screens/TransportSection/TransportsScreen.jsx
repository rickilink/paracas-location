import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import SectionHeader from "../../components/Modular/SectionHeader";

import SectionHero from "../../components/Modular/SectionHero";
import SectionPopularStays from "../../components/Modular/SectionPopularStays";

import { filterToursByDiscount } from "../../redux/slices/tourSlice";
import { useTransports } from "../../hooks/useTransport";
import { filterTransportByDiscount } from "../../redux/slices/transportSlice";

// query import { collection, query, where, getDocs } from "firebase/firestore";

export default function TransportsScreen() {
  const transports = useTransports(); //TODO: change Name
  const filteredTransports = filterTransportByDiscount(transports); //TODO: change Name

  return (
    <View className="pt-8 px-6 bg-primary-background flex-1">
      <View>
        <SectionHeader title="transport" Items={transports} />
        {/*TODO: Change Name */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <SectionHero filteredByDiscount={filteredTransports} />
          <SectionPopularStays type="transport" Items={transports} />
        </ScrollView>
      </View>
    </View>
  );
}
