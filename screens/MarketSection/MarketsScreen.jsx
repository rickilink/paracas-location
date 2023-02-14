import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import SectionHeader from "../../components/Modular/SectionHeader";

import SectionHero from "../../components/Modular/SectionHero";
import SectionPopularStays from "../../components/Modular/SectionPopularStays";

import { useMarkets } from "../../hooks/useMarkets";
import { filterMarketsByDiscount } from "../../redux/slices/marketSlice";

// query import { collection, query, where, getDocs } from "firebase/firestore";

export default function MarketsScreen() {
  const markets = useMarkets(); //TODO: change Name
  const filteredTours = filterMarketsByDiscount(markets); //TODO: change Name

  return (
    <View className="pt-8 px-6 bg-primary-background flex-1">
      <View>
        <SectionHeader title="tours" Items={markets} />
        {/*TODO: Change Name */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <SectionHero filteredByDiscount={filteredTours} />
          <SectionPopularStays type="tour" Items={markets} />
        </ScrollView>
      </View>
    </View>
  );
}
