import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import SectionHeader from "../../components/Modular/SectionHeader";

import SectionHero from "../../components/Modular/SectionHero";
import SectionPopularStays from "../../components/Modular/SectionPopularStays";

import { filterToursByDiscount } from "../../redux/slices/tourSlice";
import { useTransports } from "../../hooks/useTransport";
import { filterTransportByDiscount } from "../../redux/slices/transportSlice";
import { useExchanges } from "../../hooks/useExchange";
import { filterExchangeByDiscount } from "../../redux/slices/exchangeSlice";

// query import { collection, query, where, getDocs } from "firebase/firestore";

export default function ExchangesScreen() {
  const exchanges = useExchanges(); //TODO: change Name
  const filteredExchanges = filterExchangeByDiscount(exchanges); //TODO: change Name

  return (
    <View className="pt-8 px-6 bg-primary-background flex-1">
      <View>
        <SectionHeader title="exchanges" Items={exchanges} />
        {/*TODO: Change Name */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <SectionHero filteredByDiscount={filteredExchanges} />
          <SectionPopularStays type="exchange" Items={exchanges} />
        </ScrollView>
      </View>
    </View>
  );
}
